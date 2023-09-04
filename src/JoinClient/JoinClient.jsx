import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams ,useHistory} from 'react-router-dom'
import { setIdentity, setIsRoomHost, setRoomId } from '../store/actions';

export default function JoinClient(props) {
    const { id,name,host,callBack } = useParams();
    const nvigate=useHistory();
    const disPatch=useDispatch();

    console.log("🚀 ~ file: JoinClient.jsx:5 ~ JoinClient ~ prams:", id)

    useEffect(()=>{
        window.localStorage.setItem('path',callBack||"");
        disPatch(setRoomId(id));
        disPatch(setIsRoomHost(host==1?true:false))
        disPatch(setIdentity(name))
        nvigate.push('/room')

    },[id,name,host])
  return (
    <div>JoinClient</div>
  )
}
