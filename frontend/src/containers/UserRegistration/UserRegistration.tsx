import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import Button from "../../components/Buttons/Button";

interface FormData {
  email: string;
  phone: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  password: string;
  role_id: string;
  nid: string;
}

interface Role {
  role_id: number;
  role_name: string;
  access: string;
}

const RegisterForm: React.FC = () => {
  //   const [rolesList, setrolesList] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    password: "",
    role_id: "2",
    nid: "",
  });

  //   useEffect(() => {
  //     getAccess();
  //   }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    axios
      .post("http://localhost:4000/api/auth/register", formData)
      .then((response) => {
        alert("User registered successfully");
        console.log(response);
        setLoading(false);
        setFormData({
          email: "",
          phone: "",
          first_name: "",
          last_name: "",
          middle_name: "",
          password: "",
          role_id: "2",
          nid: "",
        });
      })
      .catch((error) => {
        alert("Failed to register");
        console.log(error);
        setLoading(false);
      });
  };

  //   const getAccess = () => {
  //     axios
  //       .get<Role[]>("http://localhost:4000/api/roles")
  //       .then((response) => {
  //         setrolesList(response.data);
  //       })
  //       .catch((error) => console.log(error));
  //   };

  return (
    <DashboardContainer>
      <h1 className="text-3xl font-bold mb-4">Registration</h1>
      <form onSubmit={handleSubmit}>
        <label className="block">
          Email:
          <input
            type="email"
            className="
                w-full text-lg rounded border-2 
                p-2 px-4 text-md
                border-primary-800 dark:text-white bg-white dark:bg-primary-900 
                "
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>
        <br />
        <label className="block">
          Phone:
          <input
            type="tel"
            className="
                w-full text-lg rounded border-2 
                p-2 px-4 text-md
                border-primary-800 dark:text-white bg-white dark:bg-primary-900 
                "
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>
        <br />
        <label className="block">
          First Name:
          <input
            type="text"
            className="
                w-full text-lg rounded border-2 
                p-2 px-4 text-md
                border-primary-800 dark:text-white bg-white dark:bg-primary-900 
                "
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>
        <br />
        <label className="block">
          Last Name:
          <input
            type="text"
            className="
                w-full text-lg rounded border-2 
                p-2 px-4 text-md
                border-primary-800 dark:text-white bg-white dark:bg-primary-900 
                "
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>
        <br />
        <label className="block">
          Middle Name:
          <input
            type="text"
            className="
                w-full text-lg rounded border-2 
                p-2 px-4 text-md
                border-primary-800 dark:text-white bg-white dark:bg-primary-900 
                "
            name="middle_name"
            value={formData.middle_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="block">
          Password:
          <input
            type="password"
            className="
                w-full text-lg rounded border-2 
                p-2 px-4 text-md
                border-primary-800 dark:text-white bg-white dark:bg-primary-900 
                "
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>
        <br />

        {/* 
        <div>
          <select
            value={formData.role_id}
            onChange={handleChange}
            name="role_id"
            className="
            w-full text-lg rounded border-2 
            p-2 px-4 text-md
            border-primary-800 dark:text-white bg-white dark:bg-primary-900 
            "
          >
            {rolesList.map((role) => (
              <option key={role.role_id} value={role.role_id}>
                {role.role_name}
              </option>
            ))}
          </select>
        </div> */}

        <br />
        <label className="block">
          NID:
          <input
            type="text"
            className="
                w-full text-lg rounded border-2 
                p-2 px-4 text-md
                border-primary-800 dark:text-white bg-white dark:bg-primary-900 
                "
            name="nid"
            value={formData.nid}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <Button loading={loading} type="submit">
          Register
        </Button>
      </form>
    </DashboardContainer>
  );
};
export default RegisterForm;
