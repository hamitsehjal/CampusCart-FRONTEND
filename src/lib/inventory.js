
import { readToken, getToken } from "./authenticate";


// create a new Product
export async function addProduct(productData) {
    const token = readToken('store');
    const storeId = token.id;
    productData.append(`store`, storeId);


    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/private/products`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${getToken('store')}`,
        },
        // userData is a FormData object so no need to JSON.stringify
        body: productData,
    });

    const data = await res.json();

    if (res.status === 201) {
        return true;
    } else {
        /**
         * Our Error object from server has this structure:
         * https://github.com/hamitsehjal/CampusCart-BACKEND/blob/main/src/response.js#L35C7-L35C8
         */
        throw new Error(data.error.message);
    }
}

// Update an existing Product
export async function updateProduct(productData) {
    const token = readToken('store');
    const storeId = token.id;
    productData.append(`store`, storeId);


    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/private/products/`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${getToken('store')}`,
        },
        // userData is a FormData object so no need to JSON.stringify
        body: productData,
    });

    const data = await res.json();

    if (res.status === 201) {
        return true;
    } else {
        /**
         * Our Error object from server has this structure:
         * https://github.com/hamitsehjal/CampusCart-BACKEND/blob/main/src/response.js#L35C7-L35C8
         */
        throw new Error(data.error.message);
    }
}


// Delete an existing Product
export async function deleteProduct(product) {

    console.log(`Product Id received for Deletion: ${product}`)

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/private/products/${product}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${getToken('store')}`,
        },
        // userData is a FormData object so no need to JSON.stringify
        // body: productData,
    });

    const data = await res.json();

    if (res.status === 201) {
        return true;
    } else {
        /**
         * Our Error object from server has this structure:
         * https://github.com/hamitsehjal/CampusCart-BACKEND/blob/main/src/response.js#L35C7-L35C8
         */
        throw new Error(data.error.message);
    }
}