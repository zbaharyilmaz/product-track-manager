// 'use client';

import { textAlign } from "@mui/system";
import { Card } from "@tremor/react";
import { useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function KpiCard() {
  const { sales, purchases } = useSelector((state) => state.stock);

  const totalSales = sales.reduce((acc, sale) => acc + sale.amount, 0);
  const totalPurchases = purchases.reduce((acc, purc) => acc + purc.amount, 0);
  const totalCash = totalSales - totalPurchases;

  const data = [
    {
      name: "SALES",
      value: `€${totalSales}`,
      color: "emerald",
      bgColor: "bg-emerald-50",
    },
    {
      name: "CASH",
      value: `€${totalCash}`,
      color: "yellow",
      bgColor: "bg-yellow-50",
    },
    {
      name: "PURCHASES",
      value: `€${totalPurchases}`,
      color: "purple",
      bgColor: "bg-purple-50",
    },
  ];
  return (
    <>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {data.map((item) => (
          <Card
            key={item.name}
            decoration="top"
            decorationColor={item.color}
            className={`
              ${item.bgColor} 
            max-w-xs   
            min-h-[100px] 
            shadow-lg  
            hover:shadow-xl 
            hover:scale-105 
            transition-all 
            duration-300 
            cursor-pointer
            mx-auto 
            text-center
            `}
          >
            {/* Değerleri merkeze almak için flex-col ve items-center ekledik */}
            <dd className="flex flex-col items-center justify-center">
              <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.value}
              </span>
              {item.change && (
                <span
                  className={classNames(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-gray-700 dark:text-gray-500",
                    "text-tremor-default font-medium"
                  )}
                >
                  {item.change}
                </span>
              )}
            </dd>
            <dt className="mt-2 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </dt>
          </Card>
        ))}
      </dl>
    </>
  );
}
