<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Receipt</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .receipt {
            background: #fff;
            padding: 20px 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            text-align: center;
        }
        .receipt h1 {
            color: green;
            margin-bottom: 20px;
        }
        .receipt p {
            font-size: 14px;
            color: #555;
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="receipt">
        <h1>Order placed successfully</h1>
        <p>Order ID: #123456</p>
        <p>Date: <?php echo date("d M Y, h:i A"); ?></p>
        <p>Thank you for your purchase!</p>
    </div>
</body>
</html>
