import { User } from "lucide-react"

const RecentActivity = () => {
    const activities = [
        { id: 1, activity: "Logged in from IP address 192.168.1.100",Date: "2024-06-10 14:32" },
        { id: 2, activity: "Password changed successfully", Date: "2024-06-09 09:15" },
        { id: 3, activity: "Two-factor authentication enabled", Date: "2024-06-08 18:47" },
        { id: 4, activity: "Two-factor authentication enabled", Date: "2024-06-08 18:47" },
        { id: 5, activity: "Two-factor authentication enabled", Date: "2024-06-08 18:47" },
        { id: 6, activity: "Two-factor authentication enabled", Date: "2024-06-08 18:47" },
        { id: 7, activity: "Two-factor authentication enabled", Date: "2024-06-08 18:47" }, 
    ];
  return (
    <div className="w-full bg-white p-4  h-full min-h-[410px] rounded-md shadow ml-6">
        <h3 className="text-lg font-medium mb-4 flex gap-2 items-center"><User/> Recent Activity</h3>
        <div className="flex flex-col gap-2 max-h-80 overflow-y-auto">
            {activities.map((item) => (
                <div key={item.id} className="border-b bg-gray-50 last:border-0 p-2">
                    <p>{item.activity}</p>
                    <p className="text-xs text-gray-500">{item.Date}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentActivity
