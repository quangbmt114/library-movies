import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function Dashboard() {
    const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false);
    const handleCheck = ()=>{
        router.push("/login")
    }
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('/api/check-auth');
        setAuthenticated(true);
      } catch (error) {
        console.error('Authentication failed:', error);
      }
    };
    
    checkAuth();
  }, []);

  if (!authenticated) {
   return <div>
    vui lòng đăng nhập !!!
    <Button onClick={handleCheck}>OKE</Button>
   </div>
  }else{
    return (
        <div>
          <h1>Protected Dashboard</h1>
          <p>Welcome to the protected dashboard!</p>
        </div>
      );
  }

  
}
