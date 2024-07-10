import React from 'react';

const BookHall = ({params}) => {
    return (
        <div className="px-20 py-10">
            {
                params.id
            }

<div class="w-8/12 mx-auto mt-16 flex  flex-col border rounded-lg bg-white p-8">
    <h2 class="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
    <p class="mb-5 leading-relaxed text-gray-600">If you had any issues or you liked our product, please share
        with us!
    </p>

   <div className="flex gap-5">
    <div class="mb-4 flex-1">
        <label for="email" class="text-sm leading-7 text-gray-600">Your Name</label>
        <input type="text" id="email" name="name" placeholder="Your Name" class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
    </div>
    <div class="mb-4 flex-1">
        <label for="email" class="text-sm leading-7 text-gray-600">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
    </div>
    </div>
 
    <div className="flex gap-5">
    <div class="mb-4 flex-1">
        <label for="email" class="text-sm leading-7 text-gray-600">Contact Number</label>
        <input type="text" id="email" name="contact" placeholder="Your contact number" class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
    </div>

    <div class="mb-4 flex-1">
    <label for="options" class="text-sm leading-7 text-gray-600">Options</label>
    <select id="options" name="options" class="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
        <option value="" disabled selected>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
</div>

    </div>
    
    


    <div class="mb-4">
        <label for="message" class="text-sm leading-7 text-gray-600">Message</label>
        <textarea id="message" name="message" class="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
    </div>
    <button class="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">Send</button>
    <p class="mt-3 text-xs text-gray-500">Feel free to connect with us on social media platforms.</p>
</div>
        </div>
    );
};

export default BookHall;