import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { religionOptions, civilStatusOptions } from './lists';

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
      height: user?.height || '',
      weight: user?.weight || '',
      mother: user?.mother || '',
      father: user?.father || '',
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
            placeholder="First name"
            {...register('firstName', { required: true })}
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="col">
          <label htmlFor="middleName" className="form-label">
            Middle Name
          </label>
          <input
            className="form-control"
            placeholder="Middle name"
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
            placeholder="Last Name"
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
            placeholder="johndoe@domain.tld"
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
      </div>
      <hr />
      <div className="row">
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
          <label htmlFor="religion" className="form-label">
            Religion
          </label>
          <select
            className="form-select"
            name="religion"
            {...register('religion')}
          >
            {religionOptions.map((religion) => (
              <option
                value={religion.value}
                selected={religion.value === user?.religion}
              >
                {religion.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <label htmlFor="civilStatus" className="form-label">
            Civil Status
          </label>
          <select
            className="form-select"
            name="civilStatus"
            {...register('civilStatus')}
          >
            {civilStatusOptions.map((civilStatus) => (
              <option
                value={civilStatus.value}
                selected={civilStatus.value === user?.civilStatus}
              >
                {civilStatus.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <hr />

      <div className="row">
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
        <div className="col">
          <label htmlFor="birthplace" className="form-label">
            Birthplace
          </label>
          <input
            className="form-control"
            placeholder="Manila"
            {...register('birthplace', { required: true })}
            type="text"
            name="birthplace"
            id="birthplace"
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <label htmlFor="height" className="form-label">
            Height (cm)
          </label>
          <input
            className="form-control"
            placeholder="150"
            {...register('height', { required: true })}
            type="number"
            name="height"
            id="height"
          />
        </div>
        <div className="col">
          <label htmlFor="weight" className="form-label">
            Weight (kg)
          </label>
          <input
            className="form-control"
            placeholder="50"
            {...register('weight', { required: true })}
            type="number"
            name="weight"
            id="weight"
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <label htmlFor="mother" className="form-label">
            Mother
          </label>
          <input
            className="form-control"
            placeholder="Manila"
            {...register('mother', { required: true })}
            type="text"
            name="mother"
            id="mother"
          />
        </div>
        <div className="col">
          <label htmlFor="father" className="form-label">
            Father
          </label>
          <input
            className="form-control"
            placeholder="Manila"
            {...register('father', { required: true })}
            type="text"
            name="father"
            id="father"
          />
        </div>
      </div>
      <div className="mt-4 mb-4">
        <button className="btn btn-primary mr-3" type="submit">
          Save User
        </button>
        &nbsp;
        <Link to="/">
          <input
            type="button"
            className="btn btn-outline-primary"
            value="Cancel"
          />
        </Link>
      </div>
    </form>
  );
};
