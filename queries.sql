-- Consulta 1: Obtener el total de aportes y retiros para diciembre de 2021
SELECT movement_type, sum(amount) as monto_total
FROM user_movements
WHERE date >= '2021-12-01' AND date <= '2021-12-31'
GROUP BY movement_type;


-- Consulta 2: Obtener cantidad y monto promedio de aportes y retiros por fecha
SELECT date, movement_type, count(*) as cantidad_movimientos, avg(amount) as monto_promedio
FROM user_movements
GROUP BY date, movement_type
ORDER BY date, movement_type;


-- Consulta 3: Obtener el nombre y apellido del usuario con el mayor monto total de aportes
SELECT u.name, u.last_name, sum(m.amount) as total_aportes
FROM user_movements m
JOIN user_data u ON m.user_id = u.user_id
WHERE m.movement_type = 'subscription'
GROUP BY u.user_id, u.name, u.last_name
ORDER BY total_aportes DESC
LIMIT 1;
