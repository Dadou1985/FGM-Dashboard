import { useLocation } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Chart } from 'primereact/chart';
        
export function UserDetails() {
  const location = useLocation();
  const user = location.state;
  const userInitial = user?.firstName.charAt(0) + user?.lastName.charAt(0);

  if (!user) {
    return (
      <div className="p-12">
        <h1 className="text-2xl font-bold mb-4">Erreur</h1>
        <p className="text-red-500">Données utilisateur non trouvées.</p>
      </div>
    );
  }

  const chartData = {
    labels: user.keyPerformanceIndicator.map((kpi: { title: string; level: number }) => kpi.title),
    datasets: [
        {
            label: 'KPI',
            data: user.keyPerformanceIndicator.map((kpi: { title: string; level: number }) => kpi.level),
            backgroundColor: [
              '#8c52ff',
              '#00bf63',
              '#36A2EB',
              '#FFCE56',
              '#FF6384',
              '#ff914d'
            ]
        }
    ]
};

  const stackedOptions = {
    maintainAspectRatio: false,
    aspectRatio: .8,
    plugins: {
        tooltips: {
            mode: 'index',
            intersect: false
        },
        legend: {
          position: 'right',
            labels: {
                color: '#495057'
            }
        }
    },
};


  console.log("ROW+++++++", user.keyPerformanceIndicator)


  return (
    <div className="p-12 mb-10">
      <h1 className="text-2xl font-bold mb-10 md:mb-20">Détails de l'utilisateur</h1>
      <div className="md:flex items-center">
        <Avatar className="w-32 h-32 md:mr-10 bg-[#e8c018] border-2 border-[#e8c018] mx-auto md:ml-0 mb-10 md:mb-0">
          <AvatarFallback className="text-2xl bg-red-400 text-[#e8c018]">{userInitial && userInitial}</AvatarFallback>
        </Avatar>
        <div className="flex">
          <div className="mr-0 mr-5 md:mr-10">
            <p><strong>Prénom </strong></p>
            <p><strong>Nom </strong></p>
            <p><strong>Email </strong></p>
            <p><strong>Étapes </strong></p>
          </div>
          <div>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <p>{user.stage}</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
      <Chart type="doughnut" data={chartData} options={stackedOptions} className="w-full md:w-lg" />
      </div>
    </div>
  );
}