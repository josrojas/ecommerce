import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import styles from "./Profile.module.css";

const USER_DATA = 'userData';

const Profile = () => {
    const { handleSubmit, register, setValue } = useForm();

    useEffect(() => {
        try {
            const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {};

            setValue('name', userData.name);
            setValue('email', userData.email);
            setValue('age', userData.age);
        } catch (error) {
            console.log(error);
        }
    }, [setValue]);

    const handleFormSubmit = (data) => {
        try {
            localStorage.setItem(USER_DATA, JSON.stringify(data));
            alert('Usuario actualizado');
        } catch (error) {
            alert('Ha ocurrido un error');
        }
    };

    const MyInfo = () => {

        return (
            <div>
                <Link to="/" className={styles.homeLink}>Inicio</Link>
                <Outlet />
            </div>
        );
    };

    return (
        <div className={styles.profile}>
            <MyInfo/>
            <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
                <label className={styles.label}>
                    Name
                    <input {...register('name', { required: true, minLength: 1, maxLength: 120 })} className={styles.input} />
                </label>
                <label className={styles.label}>
                    Email
                    <input {...register('email', { required: true, min: 1, max: 120 })} className={styles.input} />
                </label>
                <label className={styles.label}>
                    Age
                    <input
                        {...register('age', { required: true, min: 1, max: 120, valueAsNumber: true })}
                        className={styles.input}
                        type='number'
                    />
                </label>
                <button type="submit" className={styles.submitButton}>Save</button>
            </form>
        </div>
    );
};

export default Profile;