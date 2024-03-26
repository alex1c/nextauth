import React from "react";
import {auth} from '../../auth'

const page = async () => {
  const session = await auth();

  if (!session || !session.user) return <div className='text-red-500'> You need to sign in </div>

  return <div>This is server component and it must be protected by auth</div>;
};

export default page;
