import { Button } from '@/components/ui/button';

export default function ProductSelector({ products, onSelect }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="flex justify-between items-center py-2 border-b border-gray-800">
          <div>
            <h4 className="font-semibold">{product.name}</h4>
            <span className="text-gray-400">€{product.price}</span>
          </div>
          <Button size="sm" onClick={() => onSelect(product)}>Aggiungi</Button>
        </div>
      ))}
    </div>
  );
}
