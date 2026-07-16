import { useState } from "react";
import { toast } from "react-toastify";
import { FiLock, FiX } from "react-icons/fi";

import { useAuth } from "../context/AuthContext";

import Card from "./ui/Card";
import Button from "./ui/Button";


function ChangePasswordModal({ isOpen, onClose }) {

  const { updatePassword } = useAuth();


  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });


  const [loading, setLoading] = useState(false);



  if (!isOpen) return null;



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };




  const handleSubmit = async (e) => {

    e.preventDefault();


    const {
      currentPassword,
      newPassword,
      confirmPassword,
    } = formData;



    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      return toast.error("All fields are required");
    }



    if (newPassword !== confirmPassword) {

      return toast.error(
        "Passwords do not match"
      );

    }



    try {

      setLoading(true);


      const response = await updatePassword(
        currentPassword,
        newPassword
      );


      toast.success(response.message);



      setFormData({
        currentPassword:"",
        newPassword:"",
        confirmPassword:"",
      });



      onClose();


    } catch(error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to change password"
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        backdrop-blur-md
        p-4
      "
    >


      <Card
        hover={false}
        className="
          w-full
          max-w-lg
          p-6
          md:p-8
        "
      >



        {/* Header */}

        <div className="
          flex
          items-center
          justify-between
          mb-8
        ">


          <div className="
            flex
            items-center
            gap-4
          ">


            <div
              className="
                p-3
                rounded-2xl
                bg-red-500/10
                text-red-500
              "
            >
              <FiLock size={22}/>
            </div>



            <div>


              <h2
                className="
                  text-2xl
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                Change Password
              </h2>


              <p
                className="
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Keep your account secure.
              </p>


            </div>


          </div>




          <button
            onClick={onClose}
            className="
              p-2
              rounded-xl
              text-slate-500
              hover:bg-slate-100
              dark:hover:bg-white/10
              transition
            "
          >

            <FiX size={22}/>

          </button>



        </div>






        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >



          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={formData.currentPassword}
            onChange={handleChange}
            className="
              w-full
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-700
              bg-slate-50
              dark:bg-white/5
              px-4
              py-3
              text-slate-900
              dark:text-white
              outline-none
              focus:ring-2
              focus:ring-emerald-500/40
            "
          />



          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            className="
              w-full
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-700
              bg-slate-50
              dark:bg-white/5
              px-4
              py-3
              text-slate-900
              dark:text-white
              outline-none
              focus:ring-2
              focus:ring-emerald-500/40
            "
          />



          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="
              w-full
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-700
              bg-slate-50
              dark:bg-white/5
              px-4
              py-3
              text-slate-900
              dark:text-white
              outline-none
              focus:ring-2
              focus:ring-emerald-500/40
            "
          />






          <div className="
            flex
            gap-3
            pt-4
          ">


            <Button
              type="button"
              variant="secondary"
              className="flex-1"
              onClick={onClose}
            >
              Cancel
            </Button>



            <Button
              type="submit"
              variant="danger"
              className="flex-1"
              disabled={loading}
            >

              {
                loading
                ? "Saving..."
                : "Change Password"
              }

            </Button>



          </div>



        </form>


      </Card>


    </div>

  );

}


export default ChangePasswordModal;