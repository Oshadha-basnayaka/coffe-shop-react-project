import BarChart from "../../../componanent/AdminComponent/bar-chart.component";
import InfoCard from "../../../componanent/AdminComponent/info-card.component";
import OrderStatistics from "../../../componanent/AdminComponent/order-static.component";
import AdminLayout from "../../../view/commen/DefaultLayout/AdminLayout";

export default function AdminDashboard(){
    return(
        <>
            <AdminLayout>
                <div className="flex justify-between gap-5">
                    <InfoCard withbackGroudStyle={true} cardName="Total products" cardValue={"5"} cardColor="bg-[#009EFB]"/>
                    <InfoCard withbackGroudStyle={true} cardName="Total orders" cardValue={"5"} cardColor="bg-[#963BF1]"/>
                    <InfoCard withbackGroudStyle={true} cardName="Total sells" cardValue={"5"} cardColor="bg-[#04B440]"/>
                    <InfoCard withbackGroudStyle={true} cardName="Total customers" cardValue={"5"} cardColor="bg-[#FAAB34]"/>
                </div>
                <div>
                    <BarChart />
                    <OrderStatistics />
                </div>
            </AdminLayout>
        </>
    );
}