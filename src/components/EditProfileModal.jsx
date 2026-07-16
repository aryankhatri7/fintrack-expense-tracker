import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FiX, FiUser } from "react-icons/fi";

import { useAuth } from "../context/AuthContext";

import Card from "./ui/Card";
import Button from "./ui/Button";


function EditProfileModal({ isOpen, onClose }) {

  const {
    user,
    updateUserProfile,
  } = useAuth();


  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);



  useEffect(() => {

    if (user) {
      setName(user.name);
    }

  }, [user]);



  const handleSubmit = async (e) => {

    e.preventDefault();


    if (!name.trim()) {
      return toast.error("Name is required");
    }


    try {

      setLoading(true);

      await updateUserProfile(name);

      toast.success("Profile updated successfully");

      onClose();


    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to update profile"
      );

    } finally {

      setLoading(false);

    }

  };



  if (!isOpen) return null;



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
                bg-emerald-500/10
                text-emerald-500
              "
            >
              <FiUser size={22}/>
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
                Edit Profile
              </h2>


              <p
                className="
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Update your account information
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



          {/* Name */}

          <div>


            <label
              className="
                block
                mb-2
                text-sm
                font-medium
                text-slate-600
                dark:text-slate-300
              "
            >
              Full Name
            </label>


            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
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
                transition
                focus:ring-2
                focus:ring-emerald-500/40
              "
            />


          </div>





          {/* Email */}

          <div>


            <label
              className="
                block
                mb-2
                text-sm
                font-medium
                text-slate-600
                dark:text-slate-300
              "
            >
              Email Address
            </label>


            <input
              type="email"
              value={user?.email || ""}
              disabled
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-700
                bg-slate-100
                dark:bg-white/10
                px-4
                py-3
                cursor-not-allowed
                text-slate-500
                dark:text-slate-400
              "
            />


          </div>





          {/* Actions */}

          <div
            className="
              flex
              gap-3
              pt-4
            "
          >


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
              className="flex-1"
              disabled={loading}
            >
              {
                loading
                ? "Saving..."
                : "Save Changes"
              }
            </Button>


          </div>


        </form>


      </Card>


    </div>

  );

}


export default EditProfileModal;