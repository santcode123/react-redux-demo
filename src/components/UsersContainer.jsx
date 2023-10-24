
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/users/actions";

const UsersContainer = () => {
    const usersInfoState = useSelector(state => state.users);
    const usersInfo = usersInfoState?.data;
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(fetchUsers());
    }
    console.log(usersInfo);
    if(usersInfoState.error){
        console.log("usersInfoState", usersInfoState);
        return <div>SomeThing Went wrong</div>
    }
    return <div>
        <button onClick={handleClick}>Get Users Data</button>
        <h3>Users list</h3>
        {!usersInfoState.error && <div>
            <ul>
                {usersInfo.map(userInfo => <li key={userInfo.id}>{userInfo.name}</li>)}
            </ul>

        </div>}
    </div>
}


export default UsersContainer;