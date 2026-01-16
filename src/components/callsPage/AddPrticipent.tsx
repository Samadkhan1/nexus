
const AddPrticipent = () => {
  return (
    <div>
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">
                Add Participant
            </h2>
            <form className="flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Participant Name"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Add Participant
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddPrticipent
