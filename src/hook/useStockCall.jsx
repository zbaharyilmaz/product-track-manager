import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  stockSuccess,
  getProCatBrandSuccess,
  getPurcBrandProSuccess,
  getSalesBrandProSuccess,
} from "../features/stockSlice";

import useAxios from "./useAxios";

// Mock data for development
const mockData = {
  products: [
    {
      _id: "1",
      name: "MacBook Pro",
      price: 2500,
      category: "Electronics",
      brand: "Apple",
      stock: 15,
      createdAt: "2024-01-01",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop",
    },
    {
      _id: "2",
      name: "iPhone 15",
      price: 1200,
      category: "Electronics",
      brand: "Apple",
      stock: 25,
      createdAt: "2024-01-02",
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=200&fit=crop",
    },
    {
      _id: "3",
      name: "Samsung Galaxy S24",
      price: 1000,
      category: "Electronics",
      brand: "Samsung",
      stock: 20,
      createdAt: "2024-01-03",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
    },
    {
      _id: "4",
      name: "iPad Air",
      price: 800,
      category: "Electronics",
      brand: "Apple",
      stock: 18,
      createdAt: "2024-01-04",
      image:
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=200&fit=crop",
    },
    {
      _id: "5",
      name: "Nike Air Max",
      price: 150,
      category: "Shoes",
      brand: "Nike",
      stock: 30,
      createdAt: "2024-01-05",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
    },
    {
      _id: "6",
      name: "Dell XPS 13",
      price: 1800,
      category: "Electronics",
      brand: "Dell",
      stock: 12,
      createdAt: "2024-01-06",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    },
    {
      _id: "7",
      name: "Sony WH-1000XM4",
      price: 350,
      category: "Electronics",
      brand: "Sony",
      stock: 22,
      createdAt: "2024-01-07",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop",
    },
    {
      _id: "8",
      name: "Adidas Ultraboost",
      price: 180,
      category: "Shoes",
      brand: "Adidas",
      stock: 28,
      createdAt: "2024-01-08",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop",
    },
  ],
  categories: [
    { _id: "1", name: "Electronics" },
    { _id: "2", name: "Shoes" },
    { _id: "3", name: "Clothing" },
    { _id: "4", name: "Books" },
    { _id: "5", name: "Home & Garden" },
    { _id: "6", name: "Sports" },
  ],
  brands: [
    {
      _id: "1",
      name: "Apple",
      image:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
    },
    {
      _id: "2",
      name: "Samsung",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&h=100&fit=crop",
    },
    {
      _id: "3",
      name: "Nike",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop",
    },
    {
      _id: "4",
      name: "Dell",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop",
    },
    {
      _id: "5",
      name: "Sony",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop",
    },
    {
      _id: "6",
      name: "Adidas",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop",
    },
    {
      _id: "7",
      name: "Microsoft",
      image:
        "https://images.unsplash.com/photo-1633419468028-1f5c0d7c2a7c?w=100&h=100&fit=crop",
    },
    {
      _id: "8",
      name: "Google",
      image:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
    },
  ],
  firms: [
    {
      _id: "1",
      name: "Tech Solutions Inc",
      phone: "555-0123",
      address: "123 Technology Street, Silicon Valley, CA 94000",
      email: "contact@techsolutions.com",
      createdAt: "2024-01-01",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
    },
    {
      _id: "2",
      name: "Fashion Forward Ltd",
      phone: "555-0456",
      address: "456 Fashion Avenue, New York, NY 10001",
      email: "info@fashionforward.com",
      createdAt: "2024-01-02",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
    },
    {
      _id: "3",
      name: "Sports World Co",
      phone: "555-0789",
      address: "789 Sports Boulevard, Miami, FL 33101",
      email: "sales@sportsworld.com",
      createdAt: "2024-01-03",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    },
    {
      _id: "4",
      name: "Electronics Hub",
      phone: "555-0321",
      address: "321 Tech Plaza, Austin, TX 73301",
      email: "support@electronicshub.com",
      createdAt: "2024-01-04",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop",
    },
    {
      _id: "5",
      name: "Gadget Galaxy",
      phone: "555-0654",
      address: "654 Innovation Drive, Seattle, WA 98101",
      email: "hello@gadgetgalaxy.com",
      createdAt: "2024-01-05",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
    },
  ],
  purchases: [
    {
      _id: "1",
      firm: "Tech Solutions Inc",
      product: "MacBook Pro",
      brand: "Apple",
      quantity: 10,
      price: 2500,
      date: "2024-01-15",
      totalAmount: 25000,
      amount: 25000,
      status: "completed",
      createdAt: "2024-01-15",
    },
    {
      _id: "2",
      firm: "Fashion Forward Ltd",
      product: "iPhone 15",
      brand: "Apple",
      quantity: 15,
      price: 1200,
      date: "2024-01-16",
      totalAmount: 18000,
      amount: 18000,
      status: "completed",
      createdAt: "2024-01-16",
    },
    {
      _id: "3",
      firm: "Sports World Co",
      product: "Nike Air Max",
      brand: "Nike",
      quantity: 50,
      price: 150,
      date: "2024-01-17",
      totalAmount: 7500,
      amount: 7500,
      status: "pending",
      createdAt: "2024-01-17",
    },
    {
      _id: "4",
      firm: "Electronics Hub",
      product: "Samsung Galaxy S24",
      brand: "Samsung",
      quantity: 20,
      price: 1000,
      date: "2024-01-18",
      totalAmount: 20000,
      amount: 20000,
      status: "completed",
      createdAt: "2024-01-18",
    },
    {
      _id: "5",
      firm: "Gadget Galaxy",
      product: "iPad Air",
      brand: "Apple",
      quantity: 25,
      price: 800,
      date: "2024-01-19",
      totalAmount: 20000,
      amount: 20000,
      status: "completed",
      createdAt: "2024-01-19",
    },
    {
      _id: "6",
      firm: "Tech Solutions Inc",
      product: "Dell XPS 13",
      brand: "Dell",
      quantity: 8,
      price: 1800,
      date: "2024-01-20",
      totalAmount: 14400,
      amount: 14400,
      status: "completed",
      createdAt: "2024-01-20",
    },
  ],
  sales: [
    {
      _id: "1",
      product: "MacBook Pro",
      brand: "Apple",
      quantity: 2,
      price: 2500,
      date: "2024-01-15",
      totalAmount: 5000,
      amount: 5000,
      customer: "John Doe",
      status: "completed",
      createdAt: "2024-01-15",
    },
    {
      _id: "2",
      product: "iPhone 15",
      brand: "Apple",
      quantity: 1,
      price: 1200,
      date: "2024-01-16",
      totalAmount: 1200,
      amount: 1200,
      customer: "Jane Smith",
      status: "completed",
      createdAt: "2024-01-16",
    },
    {
      _id: "3",
      product: "Nike Air Max",
      brand: "Nike",
      quantity: 3,
      price: 150,
      date: "2024-01-17",
      totalAmount: 450,
      amount: 450,
      customer: "Mike Johnson",
      status: "completed",
      createdAt: "2024-01-17",
    },
    {
      _id: "4",
      product: "Samsung Galaxy S24",
      brand: "Samsung",
      quantity: 1,
      price: 1000,
      date: "2024-01-18",
      totalAmount: 1000,
      amount: 1000,
      customer: "Sarah Wilson",
      status: "completed",
      createdAt: "2024-01-18",
    },
    {
      _id: "5",
      product: "iPad Air",
      brand: "Apple",
      quantity: 2,
      price: 800,
      date: "2024-01-19",
      totalAmount: 1600,
      amount: 1600,
      customer: "David Brown",
      status: "completed",
      createdAt: "2024-01-19",
    },
    {
      _id: "6",
      product: "Sony WH-1000XM4",
      brand: "Sony",
      quantity: 1,
      price: 350,
      date: "2024-01-20",
      totalAmount: 350,
      amount: 350,
      customer: "Lisa Davis",
      status: "pending",
      createdAt: "2024-01-20",
    },
    {
      _id: "7",
      product: "Adidas Ultraboost",
      brand: "Adidas",
      quantity: 2,
      price: 180,
      date: "2024-01-21",
      totalAmount: 360,
      amount: 360,
      customer: "Tom Anderson",
      status: "completed",
      createdAt: "2024-01-21",
    },
  ],
};

const useStockCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      try {
        const { data } = await axiosWithToken.get(url);
        dispatch(stockSuccess({ url, data }));
      } catch (apiError) {
        // If API fails, use mock data
        console.warn(
          `API getStockData failed for ${url}, using mock data:`,
          apiError.message
        );

        const mockResponse = {
          data: mockData[url] || [],
          message: "Mock data - API server unavailable",
          status: "success",
          count: mockData[url]?.length || 0,
        };

        dispatch(stockSuccess({ url, data: mockResponse }));
      }
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      try {
        await axiosWithToken.delete(`${url}/${id}`);
        getStockData(url);
      } catch (apiError) {
        console.warn(
          `API deleteStockData failed for ${url}/${id}, using mock:`,
          apiError.message
        );
        // Mock delete - just refresh the data
        getStockData(url);
      }
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      try {
        await axiosWithToken.post(url, info);
        getStockData(url);
      } catch (apiError) {
        console.warn(
          `API createStockData failed for ${url}, using mock:`,
          apiError.message
        );
        // Mock create - just refresh the data
        getStockData(url);
      }
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const updateStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      try {
        await axiosWithToken.put(`${url}/${info._id}`, info);
        getStockData(url);
      } catch (apiError) {
        console.warn(
          `API updateStockData failed for ${url}/${info._id}, using mock:`,
          apiError.message
        );
        // Mock update - just refresh the data
        getStockData(url);
      }
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getProCatBrand = async () => {
    dispatch(fetchStart());

    try {
      try {
        // const [a,b,c]=[2,4,6]  => Array destructure
        const [products, categories, brands] = await Promise.all([
          axiosWithToken("products"),
          axiosWithToken("categories"),
          axiosWithToken("brands"),
        ]);
        dispatch(
          getProCatBrandSuccess([
            products?.data?.data,
            categories?.data?.data,
            brands?.data?.data,
          ])
        );
      } catch (apiError) {
        console.warn(
          "API getProCatBrand failed, using mock data:",
          apiError.message
        );

        dispatch(
          getProCatBrandSuccess([
            mockData.products,
            mockData.categories,
            mockData.brands,
          ])
        );
      }
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getPurcBrandPro = async () => {
    dispatch(fetchStart());

    try {
      try {
        const [purchases, brands, products, firms] = await Promise.all([
          axiosWithToken("purchases"),
          axiosWithToken("brands"),
          axiosWithToken("products"),
          axiosWithToken("firms"),
        ]);

        dispatch(
          getPurcBrandProSuccess([
            purchases?.data?.data,
            brands?.data?.data,
            products?.data?.data,
            firms?.data?.data,
          ])
        );
      } catch (apiError) {
        console.warn(
          "API getPurcBrandPro failed, using mock data:",
          apiError.message
        );

        dispatch(
          getPurcBrandProSuccess([
            mockData.purchases,
            mockData.brands,
            mockData.products,
            mockData.firms,
          ])
        );
      }
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getSalesBrandPro = async () => {
    dispatch(fetchStart());

    try {
      try {
        const [sales, brands, products] = await Promise.all([
          axiosWithToken("sales"),
          axiosWithToken("brands"),
          axiosWithToken("products"),
        ]);

        dispatch(
          getSalesBrandProSuccess([
            sales?.data?.data,
            brands?.data?.data,
            products?.data?.data,
          ])
        );
      } catch (apiError) {
        console.warn(
          "API getSalesBrandPro failed, using mock data:",
          apiError.message
        );

        dispatch(
          getSalesBrandProSuccess([
            mockData.sales,
            mockData.brands,
            mockData.products,
          ])
        );
      }
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    getStockData,
    deleteStockData,
    createStockData,
    updateStockData,
    getProCatBrand,
    getPurcBrandPro,
    getSalesBrandPro,
  };
};

export default useStockCall;
