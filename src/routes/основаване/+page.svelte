<div class="montaj-info-box">
    <div class="montaj-info-item">
        <span>Услуга</span>
        <span class="price-label">Цена</span>
    </div>

    <div class="montaj-info-item">
        <span>Монтаж със скеле</span>
        <span class="price">120лв</span>
    </div>

    <div class="montaj-info-item">
        <span>Монтаж с висока стълба над 3 метра</span>
        <span class="price">80лв</span>
    </div>
</div>

<style>
    .montaj-info-item {
    background: rgba(0, 0, 0, 0.246);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 0;
    gap: 10px;
    border-left: 1px solid var(--light);
    border-right: 1px solid var(--light);
}

.montaj-info-item:first-child {
    background: #0070BB;
    color: #fff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.montaj-info-item:nth-child(odd):not(:first-child) {
    background: rgba(0, 0, 0, 0.6);
}

.montaj-info-item:nth-child(even) {
    background: rgba(0, 0, 0, 0.356);
}

.price-label {
    font-weight: bold;
}

.price {
    font-weight: bold;
    color: #ddd;
    flex-shrink: 0; /* To prevent shrinking the price span */
}

</style>