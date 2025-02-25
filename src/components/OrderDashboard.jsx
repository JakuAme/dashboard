import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Plus, ShoppingCart, List } from 'lucide-react';
import { products } from '../data/products';
import ProductSelector from './ProductSelector';

export default function OrderDashboard() {
  const [orders, setOrders] = useState([]);

  return (
    <div className="min-h-screen bg-[oklch(0.15_0_0)] text-[oklch(0.98_0_0)] p-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Dashboard Ordini</h1>
        <Button className="flex items-center gap-2 bg-[oklch(0.6_0.1_240)] hover:bg-[oklch(0.5_0.1_240)]">
          <Plus className="h-4 w-4" /> Nuovo Ordine
        </Button>
      </header>

      <main className="grid grid-cols-3 gap-6">
        <Card className="col-span-1 bg-[oklch(0.12_0_0)] border border-[oklch(0.3_0_0)] shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <ShoppingCart className="text-[oklch(0.6_0.1_240)]" /> Prodotti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ProductSelector
              products={products}
              onSelect={(product) => {
                setOrders((prevOrders) => [...prevOrders, product]);
              }}
            />
          </CardContent>
        </Card>

        <Card className="col-span-2 bg-[oklch(0.12_0_0)] border border-[oklch(0.3_0_0)] shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <List className="text-[oklch(0.3_0.1_120)]" /> Ordini Attuali
            </CardTitle>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <p className="text-center text-[oklch(0.7_0_0)]">Non hai ancora ordini.</p>
            ) : (
              <ul className="space-y-2">
                {orders.map((order, index) => (
                  <li key={index} className="flex justify-between rounded bg-[oklch(0.15_0_0)] px-4 py-2">
                    <span>{order.name}</span>
                    <span className="font-semibold">€ {order.price}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
