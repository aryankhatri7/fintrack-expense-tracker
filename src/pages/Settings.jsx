import { useContext, useState } from "react";

import {
  FiMoon,
  FiSun,
  FiUser,
  FiBell,
  FiShield,
  FiSettings,
} from "react-icons/fi";

import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

import EditProfileModal from "../components/EditProfileModal";
import ChangePasswordModal from "../components/ChangePasswordModal";


function Settings() {

  const {
    theme,
    toggleTheme,
  } = useContext(ThemeContext);


  const { user } = useAuth();


  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);



  return (

    <div className="space-y-8">


      {/* Header */}

      <div>

        <div className="flex items-center gap-3">

          <div className="
            p-3
            rounded-2xl
            bg-emerald-500/10
            text-emerald-500
          ">
            <FiSettings size={24}/>
          </div>


          <div>

            <h1 className="
              text-3xl
              font-black
              text-slate-900
              dark:text-white
            ">
              Settings
            </h1>


            <p className="
              mt-1
              text-slate-500
              dark:text-slate-400
            ">
              Manage your account, preferences and security.
            </p>

          </div>

        </div>

      </div>



      {/* Profile */}

      <Card className="p-6">


        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">


          <div className="flex items-center gap-5">


            <div className="
              h-16
              w-16
              rounded-3xl
              bg-gradient-to-br
              from-emerald-400
              to-cyan-500
              flex
              items-center
              justify-center
              text-white
              text-2xl
              font-bold
            ">

              {user?.name?.charAt(0)?.toUpperCase() || "U"}

            </div>



            <div>

              <h2 className="
                text-xl
                font-bold
                text-slate-900
                dark:text-white
              ">
                {user?.name || "Loading..."}
              </h2>


              <p className="
                text-sm
                text-slate-500
                dark:text-slate-400
              ">
                {user?.email || "Loading..."}
              </p>


              <p className="
                mt-2
                text-xs
                text-slate-400
              ">
                Member since {" "}
                {
                  user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString(
                      "en-IN",
                      {
                        month:"long",
                        year:"numeric"
                      }
                    )
                  : "..."
                }
              </p>

            </div>


          </div>



          <Button
            onClick={() => setOpenProfileModal(true)}
          >
            Edit Profile
          </Button>


        </div>


      </Card>





      {/* Preferences */}


      <div className="grid gap-6 lg:grid-cols-2">



        {/* Appearance */}

        <Card className="p-6">


          <div className="flex items-center gap-4 mb-6">


            <div className="
              p-3
              rounded-2xl
              bg-indigo-500/10
              text-indigo-500
            ">
              {
                theme === "dark"
                ?
                <FiSun size={22}/>
                :
                <FiMoon size={22}/>
              }

            </div>


            <div>

              <h3 className="
                font-bold
                text-lg
                text-slate-900
                dark:text-white
              ">
                Appearance
              </h3>


              <p className="
                text-sm
                text-slate-500
                dark:text-slate-400
              ">
                Customize your visual experience.
              </p>


            </div>


          </div>



          <div className="
            flex
            items-center
            justify-between
            rounded-2xl
            bg-slate-100
            dark:bg-white/5
            p-4
          ">


            <span className="
              font-medium
              text-slate-700
              dark:text-white
            ">
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>


            <button
              onClick={toggleTheme}
              className="
                px-4
                py-2
                rounded-xl
                bg-emerald-500
                text-white
                text-sm
                font-semibold
              "
            >
              Change
            </button>


          </div>


        </Card>





        {/* Security */}

        <Card className="p-6">


          <div className="flex items-center gap-4 mb-6">


            <div className="
              p-3
              rounded-2xl
              bg-red-500/10
              text-red-500
            ">
              <FiShield size={22}/>
            </div>


            <div>

              <h3 className="
                font-bold
                text-lg
                text-slate-900
                dark:text-white
              ">
                Security
              </h3>


              <p className="
                text-sm
                text-slate-500
                dark:text-slate-400
              ">
                Protect your account.
              </p>

            </div>


          </div>



          <Button
  variant="danger"
  className="w-full"
  onClick={() => setOpenPasswordModal(true)}
>
  Change Password
</Button>


        </Card>



      </div>






      {/* Notifications */}

      <Card className="p-6">


        <div className="flex items-center gap-4">


          <div className="
            p-3
            rounded-2xl
            bg-emerald-500/10
            text-emerald-500
          ">
            <FiBell size={22}/>
          </div>



          <div>


            <h3 className="
              font-bold
              text-lg
              text-slate-900
              dark:text-white
            ">
              Notifications
            </h3>


            <p className="
              text-sm
              text-slate-500
              dark:text-slate-400
            ">
              Transaction alerts and financial reminders.
            </p>


          </div>


        </div>


      </Card>






      <EditProfileModal
        isOpen={openProfileModal}
        onClose={() => setOpenProfileModal(false)}
      />


      <ChangePasswordModal
        isOpen={openPasswordModal}
        onClose={() => setOpenPasswordModal(false)}
      />


    </div>

  );
}


export default Settings;