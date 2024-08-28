import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Discover amazing deals on the products you love</p>
        <Link to="./Store.js" className="shop-now-button">Shop Now</Link>
      </div>

      {/* Featured Categories */}
      <div className="categories-section">
        <h2 className='m-10 '>Featured Categories</h2>
        <div className="categories">
          {/* first card  */}
          <div className="category-card">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKUArwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAcDBQYBAgj/xABHEAABAwMABAkIBwYEBwAAAAABAAIDBAURBhIhMQcTIjJBUWFysRQlNURxkbLBMzRSYnOB0RUjQmOh8CQ2k6IWU3WCg8Lh/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAQBAgUD/8QAJhEAAgEDBAEEAwEAAAAAAAAAAAECAxExBBIhMhMzQVFxIoHBQv/aAAwDAQACEQMRAD8AvFERABERABERABUxprW1dTp/W26epldRRQs1IC86gOq051d2dp2q51SOlW3hPufZFH8LFDLQyd1oXZrY6mc59uo3O63QNJ9+F1fkNIBgUsAHVxYWj0K+pOK6QqSHkrHhJpqeO31Lo6eJpDHHLWAdCpazyyPqJQ97nADZlxKu3hMPm6q/Dd4FUhZfrE399KrLBeJY3BTBDWaUviqoo5oxE7DJGhw9xUzhpoqK2z251BSU9O97XFxhiawu29OAo/A9t0tl7IXeAUzh5+tWwdUTvFR7EPsbHgpr6t9XFSPqJHQOouMLHOJGtrDaFaaqXgoHnaDst3/sFbJVkRLJ6iIpKhERABERABERABERABERABUhpMc8Jt2PVHH8LFd6o/SI63CZec9DWD/axQy8MlmaF/UXLoyuc0M+ouXRlBV5K04TT5uqvw3eBVI2T6xN/fSFdnCcfN1V+GfBUnY/p5T1/qFEsF4lmcDYzpXOeqF3yUnh5+u20fyXfEsHAzt0oqT1Qu+Sy8PBzcLcOqE/Eo9iP9E/gpHnaLstw+JWuVVPBX6Wj/6ePiVrFWREsnqIikqEREAEREAEREAEREAEXmVDqLnR07tWWZoI34BOPcquSWSUm8EzKo6/HPCTe3Ho1B/tarbfpFa276h3+k/9FWukVBTv0hqrtQVL5nVbhrsfEWBmABsO87upUdWK9y8Is77Qz6i5dEVWtl0hrLdEYhFS4P8AzC/PgtlJpjWDm+QH2cYfko88CXSkajhO9HVX4Z8FStj+ml7P1VqaTXGe9wyRTiFjXgg8UHA/1XG0ujsVK5zo5piXb9Yj9FR14HRU5HWcDGDpPV46IXeIWTh4PnK3j+QfiKiaFSf8NXKWtiIkMjSw8ZnV24+yD1LLp25+ldVTzOMcXFR6v7sOPTnpAUqtCxXxS3XNzwWDzwwHot4+JWqqo0FqKe01xqK2RzAIBC0Nic4HbnOej2LvW6UWl26eT/Qf+i6KpC2Sk4SubpFqo9ILZJzaj3xuHyWxjlZKwPjcHNO4jblWUovhMo01kyIiKxAREQAREQAREQBCuUjo6fVYcOeQ0HqWnko42R41R+q2t25kP4nyKg1W1m9Ial8sYpLg1T4WdSwugYTnV39G8KU9Y3LP3jNiMaZvUsbqSM72NP5KSVjJxvKt5GG0wOo4jvY0+0LzyOL7A9yyveG7zjZuPSvBIPte/YjyMnafHkcJ3sb7gvoUsP2B7l9NdnpWRqN7RFj4FNFnIbg9YXohj+yPcvsFequ9k2PniI3b2rZaPPfS3F1KHEwyMLg3qPYoLDysKbbvTlP3D4FNaeT3I5VlwzqURFqiQREQAREQAREQBrrvsbD+J8ioNTzFNvB5MPf+RUOo5iztT2Y1SwjWvKxkrI9YnFZ40fLlzemmkI0etL6oNbJM53FwsccAu7ezeV0Lyqx4ZfR1vPVO7Z+S66eKnUSZWbtFnDVOmOkFRMZXXSoYSebE7UaPyClXa8aS2irFNUXeoc8sD8slyMFcuF0un58+sOPV2eJWq4xUkrCibszs+D7TWsuVWbddJBJMW60U2ME43gj+9ysuN2W5X590B/zZb8faf8DlfsJyxZ+rpqM+PgZpNuPJnXq8BRKnU+2c9TbafPtOPuu8CoLOeptsOb7Tn7rvApnTdkcKuGdWiItgRCIiACIiACIiANZeTyYO/wDJQ5+Ypd69X7/yUSfmLO1PZjVHCNbIVicVlkWFxWaNoxvKrDhlP+AoB/Pd8Ks55VYcMh/wNv8AxnfCEzpfVRzq9GVaza9regnC6PT70438BniVzkX0re8PFd1pXo1dLpcm1NDTiSLimtyZGjbt6M9q05u1SP0xWPMWaXQAZ0sof+/4Cr6g5g7VUWh2il3t+kNNVVdMGQx62s4StP8ACR19qt6HYwdiQ1ri5/oYoq0TMF9L5C9SZ2PtnPUy1+nKfuu8CoTOeptq9OU/dd4FN6bsjhVwzrERFriIREQAREQAREQBq716v3/kolRzFKvXq/f+SiVHMWdqezGqWEa2RYXLNIsJWdYbRieqw4ZPqVuH85/gFZ71V/DKf8JbfxX+ATGl9VHOr0ZWEAzOwdbh4rptOauohvgbFPIwcQzY15HWuapvrEXa8eIW+099P/8AhZ81qS9WP0/4Kx4gyVwfV1W/SmkY+pmc3D+S6Qkc0q8ITliobg8/zXRnsf8AAVfEHMHas/W8VOPgYov8CQEQIkzsfTDy1OtXpyn7rvAqCznqdavTlP3XeBTem7I4VcM6xERa4iEREAEREAEREAau9er9/wCSh1HMUy9er98+Ch1HMWfqezGqOEa2RYSssg5WBt9iwkrO5GzG9VjwyRudQ2+QA6jZngn2gY8CrOdtWnv9npr3b5KOra4sfgtcCNZrh0jt3+9daEtk1JlJxvGx+eqUA1EXfb4hb7T0efyOkQs8FuqngyusUxFNV0r2DcX6zHe7BXlRwe6QVkplqqylkef4nyPJ+FabrU3JSuLeOVrGp4O43O0ppS0EhrXknqGqR4lXtCMMHYuR0O0PisGtK9/H1TwA5+rgNH2QuwZsGMFIaqanUuhilHbGxkBXq8C9znoKWLn2wctTbV6cp+67wKhR89TbV6dpx9x3gU3puyONXDOsREWsIhERABERABERAGrvXq/fPgoVSeQpt69X7x8FCqeYs/U9mNUcI5fSero6KjEtfAakvlayKFoy6SV3NaFr6eile9nH2ejY1x5QjqS9zB7NQA+zKadNfFBbrhqa8Fvr455mgZ1Y+UC4DszlbBlyoXiBzayCQTODY9WQHXJ3Y60lZqKfyNI1FifQXmh8pFvjhxM+LVJ1uacZytNV323QW5tfJZss8tdSua12S3Vzl27bzTsUnQu40UdpcJauBrjVzHUdIMgmQ42dv9VBsrmvZR5wQb3VDBIweRMV1UFuldYK34RvXRWvyemqIKWCWGoexrXN2DDjsPb7FqYrlaTT1cslr5cNc6ijiYdZ08g3AdWVHqaWpsd4oLfCzWtNXWslgOT+4cMlzPYTtCgQZYyor9Uvgo9IppJ8DOqwgAux2ZV401bP0Q2dBWystdL5ZcLLTtpWkCV9PUF7owekgtAIHYVKopKGqu1ZQtoYw2njjkEuvseHgnd0bli0jr6ap0dqKekljqJ6yPioY4XBxeXbM7OgbyexQ7OWWzSmrp6mRketRU4hLzq8YGtIOMrnZOF/cthku811Fa46x37OEvkzoWj98W6/GbB7P6rd2xk0b3iSlp4WuGSY6gyHPUctC4vSupiqqO9yxyA03lNJE2ZrhqktOXYO7ZnoXYWnyQyZp7i6qcRsaanjNnWBnYokkohfk3UfPHaptqHn2A9THeChR72lTrX6ch7jvBX0/ZHKrhnVoiLXEQiIgAiIgAiIgDV3n1fvHwUKo5im3n1fvHwUOpHIWdqezGqPVGlrTOGE0zInyE4IleWgj2gH3LUCmqoZONjtlrZId72TEH38Wtlcqp0DmhsbXOcTjXdqDAGd+N60sd6fxEUj4W8rncvO4gE4APX0lJRTsMNozOhri4P/AGfbg8HIcJnZ9/FrwNuDBjyShbytbZO7f0nmb1i/bD9XXfA1rNVj88bk4dkDZjsOVgF3ldMBxbGMbkPAcdYHMeNhH3+kf/bWkF0TXftN2+moTtz9O/f18xfLW3JudWmoRrEn6dwyes8jao77yY6fjXRsPI43DZScswD1bDtCRXSUSlsjddpdqMOcZfrEAburb+SLS+A3IwVNnkmqWVDaKjpaphy2op6h0bvYSI8EdhBClyw1lQ0MqKC3zgbuNmLvGPpXxcbpLC5zI9Uajy08rlHEZfsGDs7VHbc6xsoEmo9pJaG52A6z9+zqYrfk0RuSNixlcGCMUVAGDc3j3YH5cWpVHFI1xdNTU8JwBmF+tkbd+WjC1P7clDGv8maA5pcMy7CAGk7d38Q7NhUhlyqXywt4uNjXvxkvPNy4dWw5wqNMNyN9H0din2v05D3XeCgQ9Hap9s9OQ9x3gu2m7IpVwzqkRFriIREQAREQAREQBrLz6v3j4KFU8xEWdqezGqOEc9dpI2U/GSQtkGRhp6DnetLJcYX0ksxo2HiZQwNcc78bRs2b/wCi8RJxXB2bMV1uvkLJG8Q2RzYnvBzgcnOBhfclZFBSNqG0zdjXuDWkDGqcdS9RX2q5W7I77iwTvgNMwloDy7Zt5vRj7y+X3WMMiqDScoSuYAJMY2b93avUVtqC5nrrgKaUl0DZP3rYhtwRkdeFFF6Hks0slK1wZK6PU1sZw8jO5EUbUF2TqW4tqrgaQ04aQ0v19bO3AO7HapVFO6WormvA1YJQ1gHVqtPiSURRJLkE2bmLo7FPtnpyHuORFfT9kFXDOpREWuIhERAH/9k=" alt="Category 1" />
            <h3>Perfume</h3>
          </div>
          {/* second card  */}
          <div className="category-card">
            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRaNkEeq53fCLLoNkYrH0RJg1VjBQOyxDXT66xdOs1nmrXGzTidK6QbTmrImYduraTYEXbaD6idk32pfmKGTn1YA2sbHwTP_Z43GeHR0UxyfoFwA39lVneRer_gUaPFlchcQwO6wQ&usqp=CAc" alt="Category 2" />
            <h3>Fashion</h3>
          </div>
          {/* third card  */}
          <div className="category-card">
            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTw8Jz9WKD6gKSdhDQTmvnGQRcVlCUfKUqJ3OqS7TGTIMoE3fxK4081gzErDcf9BtKKi1ArJZaH2Kl1pWI_X74xejn6dXoCZGBPWHTKqmo106UBaLGy73eVFPsvimE7fepKSiqgklaIDA&usqp=CAc" alt="Category 3" />
            <h3>Home & Kitchen</h3>
          </div>
        </div>
      </div>

      {/* Deals Section */}
      <div className="deals-section">
        <h2>Today's Deals</h2>
        <div className="deals">
          {/* fourth card  */}
          <div className="deal-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJV0MyDuLWRV5XGDrTrBwKKjxUfsgBmZFWDg&s" alt="Deal 1" />
            <h3>Product 1</h3>
            <p>Special price: $29.99</p>
          </div>
          {/* fifth card  */}
          <div className="deal-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7uY44z_87w4ZQecTbdNHL0U_gpujac8mog&s" alt="Deal 2" />
            <h3>Product 2</h3>
            <p>Special price: $19.99</p>
          </div>
          {/* sixth card  */}
          <div className="deal-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2rQ_6C7jmXxmidom-GN584E8cQNkTOE2Lg&s" alt="Deal 3" />
            <h3>Product 3</h3>
            <p>Special price: $39.99</p>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      {/* sevnth card  */}
      <div className="banner-section">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyHO3UFS9Yk3IVbLL7aJAgHjkUBRBbD_qxg&s" alt="Promotional Banner" />
      </div>

      {/* Recommended Products */}
      <div className="recommended-section">
        <h2>Recommended for You</h2>
        <div className="recommended-products">
          {/* eighth card  */}
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoMKwfmjNMjD3KRUppa0-LwmGN50BtU_eMQ&s" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Price: $49.99</p>
          </div>
          {/* ninth card  */}
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBXBF7gOQl2QHTz3kcH6gxV4Q7WVn36X7jw&s" alt="Product 2" />
            <h3>Product 2</h3>
            <p>Price: $59.99</p>
          </div>
          {/* tenth card  */}
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgir-5ooBNG-_lBi52c4BYYpb6tClm3-O4lA&s" alt="Product 3" />
            <h3>Product 3</h3>
            <p>Price: $69.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
