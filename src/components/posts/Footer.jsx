import Voting from "./Voting";

const Footer = ({post}) => {
    const handleComments = () => {
        console.log('comments');
    }
    return (
        <div className="flex justify-between pr-3 pl-3 py-5">
            <Voting post={post}/>
            <button className="bg-inherit text-white font-semibold py-2 px-4 rounded-full focus:outline-none"onClick={handleComments}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
                Comments
            </button>
        </div>
    );
};

export default Footer;