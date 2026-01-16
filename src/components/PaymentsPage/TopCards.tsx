import { Banknote, DollarSign, Download, Inbox, Upload } from "lucide-react"

const TopCards = () => {
    const cards = [
        {id: 1, title: 'Current Balance', amount: '$25,000', icon: <DollarSign/>, },
        {id: 2, title: 'Amount Sent', amount: '$25,00', icon: <Upload/>, },
        {id: 3, title: 'Amount Received', amount: '$65,000', icon: <Download/>, },
        {id: 4, title: 'Total Transactions', amount: '130', icon: <Banknote/>, },
    ]
  return (
    <div className="flex justify-between gap-2">
      {cards.map(card => (
        <div key={card.id} className={card.id === 1 ? "bg-blue-500 text-white p-4 w-full rounded-lg shadow hover:shadow-md" : "bg-white p-4 w-full rounded-lg shadow hover:shadow-md" }>
          <div className="flex items-center">
            <span className="text-2xl mr-2">{card.icon}</span>
            <div>
              <h3 className="font-semibold">{card.title}</h3>
              <p className={card.id === 1 ? "text-white" : "text-gray-500"}>{card.amount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopCards
