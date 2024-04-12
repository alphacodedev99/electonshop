import axios from 'axios';

class ProductsService {
    static getAllCategory = () => axios.get('/products/categories')
    static getAllProducts = () => axios.get('/products')
    static getSingleProduct = (productId) => axios.get(`/products/${productId}`)
}

export default ProductsService;