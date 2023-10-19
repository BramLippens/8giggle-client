import Voting from "./Voting";

const Footer = () => {
    const handleComments = () => {
        console.log('comments');
    }
    return (
        <div class="flex justify-between pr-3 pl-3 py-5">
            <Voting />
            <button class="bg-inherit text-white font-semibold py-2 px-4 rounded-full focus:outline-none"onClick={handleComments}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
                Comments
            </button>
        </div>
    );
};

export default Footer;