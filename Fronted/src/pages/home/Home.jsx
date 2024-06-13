import React from 'react'
import Siderbar from '../../components/siderbar/Siderbar.jsx';
import MessageContainer from '../../components/messages/MessageContainer.jsx';

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Siderbar />
      <MessageContainer />
    </div>
  );
}

export default Home;


// STARTER CODE
// function Home() {
//   return (
//     <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <Siderbar />
//       <MessageContainer />
//     </div>
//   );
// }

// export default Home;
