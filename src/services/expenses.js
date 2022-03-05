import { ActionCreators } from "../app/expensesReducer";
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44386/Expenses',
})

export const GetExpenses = async (dispatch) => {
    try {
        // api call
        const { data } = await axiosInstance.get();
        dispatch(ActionCreators.setExpenses(data));
    } catch {
        console.log('Error!')
    }
} 

export const NewExpense = async (dispatch, expense) => {
    try {
        //api call
        const { data } = await axiosInstance.post('', expense);
        dispatch(ActionCreators.newExpense(data));
    } catch {
        console.log('Error!')
    }
}

export const EditExpense = async (dispatch, expense) => {
    try {
        await axiosInstance.put('', expense);
        dispatch(ActionCreators.editExpense(expense));
    } catch {
        console.log('Error');
    }
}

export const DeleteExpense = async (dispatch, expense) => {
    try {
        //api call
        console.log('deleting expense: ', expense);
        await axiosInstance.delete('', { data: { ...expense } });
        dispatch(ActionCreators.deleteExpense(expense));
    } catch {
        console.log('Error!');
    }
}