import { useRouter } from 'next/navigation';
const Login = () => {
    const router = useRouter();
  return (
    <div>Login Page

        <button onClick={()=>router.push("/")}>go to home</button>
    </div>
  )
}

export default Login;