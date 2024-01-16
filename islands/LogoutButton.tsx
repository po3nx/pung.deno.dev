import { Signal } from "@preact/signals";
export default function LogoutButton(props: { loginStat: Signal<boolean> }) { 
    function Logout(){
        props.loginStat.value = false
        console.log(props.loginStat.value)
    }
    return (
        <button onClick={Logout} class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">Logout</button>
    );
}