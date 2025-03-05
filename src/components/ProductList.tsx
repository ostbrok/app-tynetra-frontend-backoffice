"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tasks = [
  {
    id: 1,
    title: "Настроить сервер",
    status: "pending",
    description: "Настроить API и базу данных.",
  },
  {
    id: 2,
    title: "Разработать UI",
    status: "in progress",
    description: "Создать интерфейс задач.",
  },
  {
    id: 3,
    title: "Тестирование",
    status: "done",
    description: "Проверить все функции перед релизом.",
  },
];

const statusColors: Record<string, string> = {
  pending: "bg-gray-200 text-gray-800",
  "in progress": "bg-yellow-200 text-yellow-800",
  done: "bg-green-200 text-green-800",
};

export default function ProductList() {
  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Список продуктов</h1>
      {tasks.map((task) => (
        <Card key={task.id} className="border rounded-lg shadow-sm">
          <CardHeader>
            <CardTitle className="flex justify-between">{task.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <p>{task.description}</p>
            <Badge
              className={`mt-2 px-2 py-1 rounded ${statusColors[task.status]}`}
            >
              {task.status}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
