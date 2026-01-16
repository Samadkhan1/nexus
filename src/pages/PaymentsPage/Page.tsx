import { Download, Send } from "lucide-react";
import TopCards from "../../components/PaymentsPage/TopCards";
import { Button } from "../../components/ui/Button";
import TransactionHistory from "../../components/PaymentsPage/TransactionHistory";
import PaymentRequest from "../../components/PaymentsPage/PaymentRequest";
import { Link } from "react-router-dom";

const PaymentsPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Payments</h1>
          <p className="text-gray-500">Manage your payments here.</p>
        </div>
        <Link to="/payments/make-payments" className="bg-blue-600 p-2 flex text-white rounded-md hover:bg-blue-700 transition-colors">
          <Send className="mr-2" /> Make Payment
        </Link>
      </div>
      <TopCards />
      <TransactionHistory />
      <PaymentRequest />
    </div>
  );
};

export default PaymentsPage;
