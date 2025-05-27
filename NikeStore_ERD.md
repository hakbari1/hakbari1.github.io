# Nike Shoes Store

```mermaid
erDiagram
PRODUCT {
   int product_id PK
   string name
   string category
   string size
   string color
   decimal price
}

CUSTOMER {
    int customer_id PK
    string first_name
    string last_name
    string gender
    string phone_number
    string address
}

SALES {
    int sale_id PK
    date sale_date
    decimal cash_amount
    decimal card_amount
    int customer_id
}

INVENTORY {
    int inventory_id PK
    int product_id
    int quantity_in_stock
    string location
}

CUSTOMER ||--o{ SALES : place } 
SALES ||--o{ PRODUCT : includes }
PRODUCT ||--o{ INVENTORY : stocked_as }

```