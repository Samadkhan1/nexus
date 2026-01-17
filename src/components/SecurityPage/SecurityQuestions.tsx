const SecurityQuestions = () => {
  return (
    <div className="max-w-xl bg-white p-4 min-h-[410px] rounded-md shadow">
      <h3 className="text-lg font-medium mb-4">Security Questions</h3>
      <p>Manage your security questions and answers.</p>
      <div className="mt-3">
        <label htmlFor="petName">What was your first pet's name?</label>
        <input
          type="text"
          id="petName"
          placeholder="Your Answer"
          className="border rounded-md p-2 w-full mb-2"
        />
        <label htmlFor="cityBorn">Which city were you born in?</label>
        <input
          type="text"
          id="cityBorn"
          placeholder="Your Answer"
          className="border rounded-md p-2 w-full mb-2"
        />
        <label htmlFor="motherName">What is your mother's maiden name?</label>
        <input
          type="text"
          id="motherName"
          placeholder="Your Answer"
          className="border rounded-md p-2 w-full"
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700">Save security questions</button>
      </div>
    </div>
  );
};

export default SecurityQuestions;
