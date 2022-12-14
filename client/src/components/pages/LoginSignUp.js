import DeleteUser from "./deleteUser";
import SignUp from "./SignUp";
import Login from "./Login";

export default function LoginSignUp() {

    return (
        <>
            <div class='float-container'>
                <Login />
                <SignUp />
                <DeleteUser />
            </div>
        </>
    )
}