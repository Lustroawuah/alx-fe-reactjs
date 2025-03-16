function UserProfile() {
    return (
      <div class="bg-gray-100 md:p-8  sm:p-4 md:max-w-sm sm:max-w-xs mx-auto, my-20 rounded-lg hover:shadow-xl shadow-lg" className="user-profile">
        <img class="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"src="https://via.placeholder.com/150" alt="User" />
        <h1 class="md:text-xl sm:text-lg hover:text-blue-800 my-4 ">John Doe</h1>
        <p class="text-gray-600 sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;