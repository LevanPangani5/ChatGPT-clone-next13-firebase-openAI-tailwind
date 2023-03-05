import {SunIcon} from '@heroicons/react/24/outline'
import {BoltIcon} from '@heroicons/react/24/outline'
import {ExclamationTriangleIcon} from '@heroicons/react/24/outline'

function page() {
  return (
    <div className="text-white flex flex-col items-center 
    justify-center h-screen px-2 ">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        <div className='flex space-x-2 text-center'>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                  <SunIcon className='h-6 w-6 text-blue-500'/>
                  <h2>Examples</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">Explain Something to me</p>
                    <p className="infoText">What is the diffenrence between a dog and a cat ?</p>
                    <p className="infoText">What is the color of the sun ?</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                  <BoltIcon className='h-6 w-6 text-blue-500'/>
                  <h2>Capabilities</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">Change ChatGPT Model to use</p>
                    <p className="infoText">Messages are stored in Firebase's Firestore</p>
                    <p className="infoText">Hot Toast notifications when ChatGPT is thinking!</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                  <ExclamationTriangleIcon className='h-6 w-6 text-blue-500'/>
                  <h2>Limitations</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">May occasionally produce harmful instructions
                    or biased content
                    </p>
                    <p className="infoText">May occasionally generate incorrect information</p>
                    <p className="infoText">Limited knowlege of world and events after 2021
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page