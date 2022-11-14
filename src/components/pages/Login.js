import NavBar from "../NavBar";

const [userB, getUserB] = useState([]);

const URL = 'http://localhost:3001/'

export default function Login() {

    const getUserdata = () => {
        axios.get(`${URL}users`) 
            .then((response) => {
                getUserB(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    


    return (
        <>
            <NavBar />
            <p>Login page</p>
        </>
    )
}