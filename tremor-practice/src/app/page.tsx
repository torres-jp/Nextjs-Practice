import { AreaChartUsageExample } from "@/components/AreaChart";
import { CardUsageExample } from "@/components/CardStat";
import Example from "@/components/FormExample";
import { ListUsageExample } from "@/components/ListStat";
import { TableUsageExample } from "@/components/TableExample";
import { Card } from "@tremor/react";

function HomePage() {
  return (
    <div className="container mx-auto pt-10">
      <div className="grid grid-cols-4 gap-4 ">
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />

        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
      </div>

      <div className="grid grid-cols-4 mt-10">
        <div className="col-span-2 px-7">
          <ListUsageExample />
          <div className="pt-5">
            <TableUsageExample />
          </div>
        </div>
        <div className="col-span-2 px-7">
          <Card>
            <AreaChartUsageExample />
          </Card>
          <Card className="mt-4">
            <Example />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
