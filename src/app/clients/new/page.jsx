"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientForm({ params }) {
  const router = useRouter("");
  const [name, setName] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [tagsIds, setTagsIds] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (params.id) {
          const response = await fetch(`http://localhost:3000/api/clients/${params.id}`);
            
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
            
          // Update state variables based on the fetched data
          setName(data.cliente.name);
          setLast_Name(data.cliente.last_name);
          setEmail(data.cliente.email);
          setPassword(data.cliente.password);
          setAddress(data.cliente.address);
          setPhone(data.cliente.phone);
          const tagsIds = data.tarj_nfc.map((target) => target.id);
          setTagsIds(tagsIds);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error as needed, e.g., show an error message to the user
      }
    };
    
    fetchData();
  }, [params.id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name, last_name, email, password, address, phone,
      tarj_nfc: { connect: Array.isArray(tagsIds) ? tagsIds.map((tagId) => ({ id: tagId })) : [], },
    };

    const jsonData = JSON.stringify(data);

    if (params.id) {
      console.log(params.id)
      const res = await fetch(`/api/clients/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: jsonData,
      });
      const responseData = await res.json();
    } else {
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonData,
      });
      const responseData = await res.json();
    }
    console.log("ANTES");
    router.refresh();
    router.push("/clients");
    console.log("DESPUES");
  };

  return (
    <form className="p-5" onSubmit={onSubmit}>
      <div className="relative z-0 w-full mb-6 group">
        <input type="email" name="email" id="email" placeholder=" " required onChange={(e) => setEmail(e.target.value)} value={email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Email
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input type="password" name="password" id="password" placeholder=" " required onChange={(e) => setPassword(e.target.value)} value={password} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Password
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="first_name" id="first_name" placeholder=" " required onChange={(e) => setName(e.target.value)} value={name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
          <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Nombre
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="last_name" id="last_name" placeholder=" " required onChange={(e) => setLast_Name(e.target.value)} value={last_name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
          <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Apellido
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="phone" id="phone" placeholder=" " required onChange={(e) => setPhone(e.target.value)} value={phone} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
          <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Numero de teléfono (1234457890)
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="address" id="address" placeholder=" " required onChange={(e) => setAddress(e.target.value)} value={address} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
          <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Dirección (Ex. Juan Manuel de Rosas 2932)
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="id" id="id" placeholder=" " required onChange={(e) => setTagsIds(e.target.value)} value={tagsIds} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
        <label htmlFor="id" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          id
        </label>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </form>
  );
}