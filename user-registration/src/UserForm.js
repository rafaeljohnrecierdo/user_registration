import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const UserForm = ({ user, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: user?.firstName || '',
      middleName: user?.middleName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      mobile: user?.mobile || '',
      sex: user?.sex || 'Female',
      birthday:
        new Date(user?.birthday).toLocaleDateString('en-CA') ||
        Date.now().toLocaleDateString('en-CA'),
      birthplace: user?.birthplace || '',
    },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="col">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            className="form-control"
            placeholder=""
            {...register('firstName', { required: true })}
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="col">
          <label htmlFor="middleName" className="form-label">
            Middle Initial
          </label>
          <input
            className="form-control"
            placeholder=""
            {...register('middleName')}
            type="text"
            name="middleName"
            id="middleName"
          />
        </div>
        <div className="col">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            className="form-control"
            placeholder=""
            {...register('lastName', { required: true })}
            type="text"
            name="lastName"
            id="lastName"
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            placeholder=""
            {...register('email', { required: true })}
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="col">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <input
            className="form-control"
            placeholder=""
            {...register('mobile', { required: true })}
            type="text"
            name="mobile"
            id="mobile"
          />
        </div>

        <div className="col">
          <label htmlFor="sex" className="form-label">
            Sex
          </label>
          <div className="row">
            <div className="col">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sex"
                  id="male"
                  value="Male"
                  {...register('sex')}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sex"
                  id="female"
                  value="Female"
                  {...register('sex')}
                  checked
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="col">
            <label htmlFor="birthday" className="form-label">
              Birthday
            </label>
            <input
              className="form-control"
              {...register('birthday', { required: true })}
              type="date"
              name="birthday"
              id="birthday"
              required
            />
          </div>
        </div>
      </div>
      <hr />

      <div className="mt-4 mb-4">
        <button className="btn btn-success mr-3" type="submit">
          Save User
        </button>
        &nbsp;
        <Link to="/">
          <input
            type="button"
            className="btn btn-outline-dark"
            value="Cancel"
          />
        </Link>
      </div>
    </form>
  );
};
