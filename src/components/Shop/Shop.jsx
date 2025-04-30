"use client"

import { useState, useEffect } from "react"
import { Link, useParams, useNavigate, useLocation } from "react-router-dom"
import "./Shop.css"

// Import product data
import { allProducts } from "./data"
import { calculateGoldPrice } from "../../utils/calculatePrice"

// Import icons
import { FaHeart, FaSearch, FaShoppingCart, FaStar, FaStarHalf } from "react-icons/fa"
import { BsGrid, BsListUl } from "react-icons/bs"

const Shop = () => {
  const { category } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const initialSort = searchParams.get("sort") || "default"

  // State for filters
  const [activeFilters, setActiveFilters] = useState({
    categories: true,
    highlight: true,
    carat: true,
    metal: true,
    stone: true,
    stoneColor: true,
    stoneShape: true,
    price: true,
    rating: true,
  })

  // State for view mode (grid or list)
  const [viewMode, setViewMode] = useState("grid")

  // State for sorting
  const [sortBy, setSortBy] = useState(initialSort)

  // State for selected filters
  const [selectedCategories, setSelectedCategories] = useState(category ? [category] : [])
  const [selectedHighlights, setSelectedHighlights] = useState([])
  const [selectedCarats, setSelectedCarats] = useState([])
  const [selectedMetals, setSelectedMetals] = useState([])
  const [selectedStones, setSelectedStones] = useState([])
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedShapes, setSelectedShapes] = useState([])
  const [priceRange, setPriceRange] = useState("all")
  const [selectedRatings, setSelectedRatings] = useState([])

  // State for products
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12
  const [categories, setCategories] = useState([])
  const [categoryCount, setCategoryCount] = useState({})

  // Toggle filter sections
  const toggleFilter = (filter) => {
    setActiveFilters({
      ...activeFilters,
      [filter]: !activeFilters[filter],
    })
  }

  // Handle category selection
  const handleCategoryChange = (category) => {
    // Navigate to the category page
    navigate(`/shop/${category}`)
  }

  // Handle highlight selection
  const handleHighlightChange = (highlight) => {
    if (selectedHighlights.includes(highlight)) {
      setSelectedHighlights(selectedHighlights.filter((h) => h !== highlight))
    } else {
      setSelectedHighlights([...selectedHighlights, highlight])
    }
  }

  // Handle carat selection
  const handleCaratChange = (carat) => {
    if (selectedCarats.includes(carat)) {
      setSelectedCarats(selectedCarats.filter((c) => c !== carat))
    } else {
      setSelectedCarats([...selectedCarats, carat])
    }
  }

  // Handle metal selection
  const handleMetalChange = (metal) => {
    if (selectedMetals.includes(metal)) {
      setSelectedMetals(selectedMetals.filter((m) => m !== metal))
    } else {
      setSelectedMetals([...selectedMetals, metal])
    }
  }

  // Handle stone selection
  const handleStoneChange = (stone) => {
    if (selectedStones.includes(stone)) {
      setSelectedStones(selectedStones.filter((s) => s !== stone))
    } else {
      setSelectedStones([...selectedStones, stone])
    }
  }

  // Handle color selection
  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color))
    } else {
      setSelectedColors([...selectedColors, color])
    }
  }

  // Handle shape selection
  const handleShapeChange = (shape) => {
    if (selectedShapes.includes(shape)) {
      setSelectedShapes(selectedShapes.filter((s) => s !== shape))
    } else {
      setSelectedShapes([...selectedShapes, shape])
    }
  }


  const goldRate = 5000; // Rate of gold per gram (constant)
  const makingChargePerGram = 300;

  // const totalPrice = calculateGoldPrice({
  //   goldRate, // Using the constant value
  //   weight: product.weight, // Weight is passed dynamically for each product
  //   makingChargePerGram, // Using the constant value
  // });

  // // Update the price object with the calculated total price
  // const minPrice = totalPrice;
  // const maxPrice = totalPrice + 10000;


  // Handle price range selection
  const handlePriceChange = (range) => {
    setPriceRange(range)
  }

  // Handle rating selection
  const handleRatingChange = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating))
    } else {
      setSelectedRatings([...selectedRatings, rating])
    }
  }

  // Handle sort change
  const handleSortChange = (value) => {
    setSortBy(value)
    // Update URL with sort parameter
    searchParams.set("sort", value)
    navigate(`${location.pathname}?${searchParams.toString()}`)
  }

  // Initialize products data
  useEffect(() => {
    // Set products from imported data
    setProducts(allProducts)

    // Extract unique categories and count products in each category
    const uniqueCategories = [...new Set(allProducts.map((product) => product.category))]
    setCategories(uniqueCategories)

    const counts = {}
    allProducts.forEach((product) => {
      if (counts[product.category]) {
        counts[product.category]++
      } else {
        counts[product.category] = 1
      }
    })
    setCategoryCount(counts)

    // If category is provided in URL, filter by that category
    if (category) {
      setSelectedCategories([category])
    }
  }, [category])

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products]

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.some((cat) => product.category.toLowerCase() === cat.toLowerCase()),
      )
    }

    // Apply highlight filters
    if (selectedHighlights.length > 0) {
      result = result.filter((product) => {
        if (selectedHighlights.includes("New Arrivals") && product.isNew) return true
        if (selectedHighlights.includes("Sale") && product.isSale) return true
        if (selectedHighlights.includes("Best Seller") && product.rating >= 4.5) return true
        return false
      })
    }

    // Apply carat filter
    if (selectedCarats.length > 0) {
      result = result.filter((product) => selectedCarats.includes(product.carat))
    }

    // Apply metal filter
    if (selectedMetals.length > 0) {
      result = result.filter((product) => selectedMetals.includes(product.metal))
    }

    // Apply stone filter
    if (selectedStones.length > 0) {
      result = result.filter((product) => selectedStones.includes(product.stone))
    }

    // Apply price range filter
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number)
      result = result.filter((product) => {
        const price = product.price.min
        if (max) {
          return price >= min && price <= max
        } else {
          return price >= min
        }
      })
    }

    // Apply rating filter
    if (selectedRatings.length > 0) {
      result = result.filter((product) => {
        return selectedRatings.some((rating) => {
          const ratingNum = Number.parseInt(rating)
          return Math.floor(product.rating) === ratingNum
        })
      })
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price.min - b.price.min)
        break
      case "price-high":
        result.sort((a, b) => b.price.min - a.price.min)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "popularity":
        // In a real app, you would have a popularity metric
        result.sort((a, b) => b.rating - a.rating)
        break
      case "date":
        // In a real app, you would have a date field
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
        break
      default:
        // Default sorting (by ID)
        result.sort((a, b) => a.id - b.id)
    }

    setFilteredProducts(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [
    products,
    selectedCategories,
    selectedHighlights,
    selectedCarats,
    selectedMetals,
    selectedStones,
    selectedColors,
    selectedShapes,
    priceRange,
    selectedRatings,
    sortBy,
  ])

  // Calculate current products to display based on pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Render star ratings
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star filled" />)
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalf key={i} className="star filled" />)
      } else {
        stars.push(<FaStar key={i} className="star" />)
      }
    }

    return stars
  }

  // Add to cart function
  // const addToCart = (e, product) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   console.log(`Added ${product.name} to cart`);

  //   const cartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;
  //   localStorage.setItem("cartCount", cartCount + 1);

  //   alert(`Added ${product.name} to cart!`);
  // };


  const addToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
  
    const cartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;
    localStorage.setItem("cartCount", cartCount + 1);
  
    // ✅ Dispatch custom event
    window.dispatchEvent(new Event("cartCountUpdated"));
  
    // alert(`Added ${product.name} to cart!`);
  };
  
  // Add to wishlist function
  // const addToWishlist = (e, product) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   console.log(`Added ${product.name} to wishlist`)
  //   // In a real app, you would dispatch an action to add the product to the wishlist
  //   alert(`Added ${product.name} to wishlist!`)
  // }

  const addToWishlist = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
  
    const wishlistCount = JSON.parse(localStorage.getItem("wishlistCount")) || 0;
    localStorage.setItem("wishlistCount", wishlistCount + 1);
  
    // ✅ Dispatch custom event
    window.dispatchEvent(new Event("wishlistCountUpdated"));
  
    // alert(`Added ${product.name} to wishlist!`);
  };
  

  // Quick view function
  const quickView = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(`Quick view for ${product.name}`)
    // In a real app, you would open a modal with product details
    alert(`Quick view for ${product.name}`)
  }

  const caratCounts = {
    "14KT": products.filter((p) => p.carat === "14KT").length,
    "18KT": products.filter((p) => p.carat === "18KT").length,
    "22KT": products.filter((p) => p.carat === "22KT").length,
    "24KT": products.filter((p) => p.carat === "24KT").length,
  }

  return (
    <div className="shop-page">
      {/* Page Header */}
      <div className="shop-header">
        <div className="container">
          <div className="breadcrumb">
            {/* <Link to="/">Home</Link> /<Link to="/shop">Shop</Link>
            {category && (
              <>
                {" "}
                / <span>{category}</span>
              </>
            )} */}
          </div>
          <h1>{category || "Shop"}</h1>
        </div>
      </div>

      <div className="shop-container container">
        {/* Mobile Filter Toggle */}
        <button className="mobile-filter-toggle" onClick={() => document.body.classList.toggle("filters-active")}>
          Filter Products
        </button>

        {/* Shop Sidebar */}
        <div className="shop-sidebar">
          <div className="sidebar-header">
            <h3>Filters</h3>
            <button className="close-filters" onClick={() => document.body.classList.remove("filters-active")}>
              ×
            </button>
          </div>

          {/* Filter by Categories */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleFilter("categories")}>
              <h3>Filter By Categories</h3>
              <span className={activeFilters.categories ? "minus" : "plus"}></span>
            </div>
            {activeFilters.categories && (
              <div className="filter-content">
                <ul className="filter-list">
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedCategories.length === 0} // "All Products" checked when none selected
                        onChange={() => {
                          if (selectedCategories.length === 0) {
                            // Check "All Products"
                            setSelectedCategories(categories) // Select all categories
                          } else {
                            // Uncheck "All Products"
                            setSelectedCategories([]) // Clear selected categories
                          }
                        }}
                      />
                      All Products <span>({products.length})</span>
                    </label>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => handleCategoryChange(cat)}
                        />
                        {cat} <span>({categoryCount[cat] || 0})</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Highlight */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleFilter("highlight")}>
              <h3>Highlight</h3>
              <span className={activeFilters.highlight ? "minus" : "plus"}></span>
            </div>
            {activeFilters.highlight && (
              <div className="filter-content">
                <ul className="filter-list">
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedHighlights.includes("Best Seller")}
                        onChange={() => handleHighlightChange("Best Seller")}
                      />
                      Best Seller
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedHighlights.includes("New Arrivals")}
                        onChange={() => handleHighlightChange("New Arrivals")}
                      />
                      New Arrivals
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedHighlights.includes("Sale")}
                        onChange={() => handleHighlightChange("Sale")}
                      />
                      Sale
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Filter by Carat */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleFilter("carat")}>
              <h3>Filter By Carat</h3>
              <span className={activeFilters.carat ? "minus" : "plus"}></span>
            </div>
            {activeFilters.carat && (
              <div className="filter-content">
                <ul className="filter-list">
                  {["14KT", "18KT", "22KT", "24KT"].map((carat) => (
                    <li key={carat}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedCarats.includes(carat)}
                          onChange={() => handleCaratChange(carat)}
                        />
                        {carat} <span>({caratCounts[carat] || 0})</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Filter by Choice Of Metal */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleFilter("metal")}>
              <h3>Filter By Choice Of Metal</h3>
              <span className={activeFilters.metal ? "minus" : "plus"}></span>
            </div>
            {activeFilters.metal && (
              <div className="filter-content">
                <ul className="filter-list">
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedMetals.includes("Yellow Gold")}
                        onChange={() => handleMetalChange("Yellow Gold")}
                      />
                      Yellow Gold <span>({products.filter((p) => p.metal === "Yellow Gold").length})</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedMetals.includes("Rose Gold")}
                        onChange={() => handleMetalChange("Rose Gold")}
                      />
                      Rose Gold <span>({products.filter((p) => p.metal === "Rose Gold").length})</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedMetals.includes("White Gold")}
                        onChange={() => handleMetalChange("White Gold")}
                      />
                      White Gold <span>({products.filter((p) => p.metal === "White Gold").length})</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedMetals.includes("Platinum")}
                        onChange={() => handleMetalChange("Platinum")}
                      />
                      Platinum <span>({products.filter((p) => p.metal === "Platinum").length})</span>
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Filter by Choice Of Stone */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleFilter("stone")}>
              <h3>Filter By Choice Of Stone</h3>
              <span className={activeFilters.stone ? "minus" : "plus"}></span>
            </div>
            {activeFilters.stone && (
              <div className="filter-content">
                <ul className="filter-list">
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedStones.includes("Diamond")}
                        onChange={() => handleStoneChange("Diamond")}
                      />
                      Diamond <span>({products.filter((p) => p.stone === "Diamond").length})</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedStones.includes("Ruby")}
                        onChange={() => handleStoneChange("Ruby")}
                      />
                      Ruby <span>({products.filter((p) => p.stone === "Ruby").length})</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedStones.includes("Sapphire")}
                        onChange={() => handleStoneChange("Sapphire")}
                      />
                      Sapphire <span>({products.filter((p) => p.stone === "Sapphire").length})</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedStones.includes("Topaz")}
                        onChange={() => handleStoneChange("Topaz")}
                      />
                      Topaz <span>({products.filter((p) => p.stone === "Topaz").length})</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedStones.includes("Pearl")}
                        onChange={() => handleStoneChange("Pearl")}
                      />
                      Pearl <span>({products.filter((p) => p.stone === "Pearl").length})</span>
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Filter by Stone Color */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleFilter("stoneColor")}>
              <h3>Filter By Stone Color</h3>
              <span className={activeFilters.stoneColor ? "minus" : "plus"}></span>
            </div>
            {activeFilters.stoneColor && (
              <div className="filter-content">
                <div className="color-options">
                  <button
                    className={`color-option blue ${selectedColors.includes("blue") ? "selected" : ""}`}
                    onClick={() => handleColorChange("blue")}
                  ></button>
                  <button
                    className={`color-option green ${selectedColors.includes("green") ? "selected" : ""}`}
                    onClick={() => handleColorChange("green")}
                  ></button>
                  <button
                    className={`color-option red ${selectedColors.includes("red") ? "selected" : ""}`}
                    onClick={() => handleColorChange("red")}
                  ></button>
                  <button
                    className={`color-option purple ${selectedColors.includes("purple") ? "selected" : ""}`}
                    onClick={() => handleColorChange("purple")}
                  ></button>
                  <button
                    className={`color-option yellow ${selectedColors.includes("yellow") ? "selected" : ""}`}
                    onClick={() => handleColorChange("yellow")}
                  ></button>
                  <button
                    className={`color-option white ${selectedColors.includes("white") ? "selected" : ""}`}
                    onClick={() => handleColorChange("white")}
                  ></button>
                </div>
              </div>
            )}
          </div>

          {/* Filter by Stone Shape */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleFilter("stoneShape")}>
              <h3>Filter By Stone Shape</h3>
              <span className={activeFilters.stoneShape ? "minus" : "plus"}></span>
            </div>
            {activeFilters.stoneShape && (
              <div className="filter-content">
                <ul className="filter-list shape-list">
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedShapes.includes("cushion")}
                        onChange={() => handleShapeChange("cushion")}
                      />
                      <span className="shape cushion"></span> Cushion
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedShapes.includes("emerald")}
                        onChange={() => handleShapeChange("emerald")}
                      />
                      <span className="shape emerald"></span> Emerald
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedShapes.includes("oval")}
                        onChange={() => handleShapeChange("oval")}
                      />
                      <span className="shape oval"></span> Oval
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedShapes.includes("pear")}
                        onChange={() => handleShapeChange("pear")}
                      />
                      <span className="shape pear"></span> Pear
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedShapes.includes("princess")}
                        onChange={() => handleShapeChange("princess")}
                      />
                      <span className="shape princess"></span> Princess
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedShapes.includes("round")}
                        onChange={() => handleShapeChange("round")}
                      />
                      <span className="shape round"></span> Round
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleFilter("price")}>
              <h3>Price Filter</h3>
              <span className={activeFilters.price ? "minus" : "plus"}></span>
            </div>
            {activeFilters.price && (
              <div className="filter-content">
                <ul className="filter-list">
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === "all"}
                        onChange={() => handlePriceChange("all")}
                      />
                      All
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === "0-100"}
                        onChange={() => handlePriceChange("0-100")}
                      />
                      ₹0 - ₹10000
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === "100-200"}
                        onChange={() => handlePriceChange("100-200")}
                      />
                      ₹10000 - ₹20000
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === "200-300"}
                        onChange={() => handlePriceChange("200-300")}
                      />
                      ₹20000 - ₹30000
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === "300-400"}
                        onChange={() => handlePriceChange("300-400")}
                      />
                      ₹30000 - ₹40000
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === "400-500"}
                        onChange={() => handlePriceChange("400-500")}
                      />
                      ₹40000 - ₹50000
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === "500-"}
                        onChange={() => handlePriceChange("500-")}
                      />
                      ₹50000+
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Average Rating */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleFilter("rating")}>
              <h3>Average Rating</h3>
              <span className={activeFilters.rating ? "minus" : "plus"}></span>
            </div>
            {activeFilters.rating && (
              <div className="filter-content">
                <ul className="filter-list rating-list">
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes("5")}
                        onChange={() => handleRatingChange("5")}
                      />
                      <div className="stars">
                        <FaStar className="star filled" />
                        <FaStar className="star filled" />
                        <FaStar className="star filled" />
                        <FaStar className="star filled" />
                        <FaStar className="star filled" />
                      </div>
                      <span>({products.filter((p) => Math.floor(p.rating) === 5).length})</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes("4")}
                        onChange={() => handleRatingChange("4")}
                      />
                      <div className="stars">
                        <FaStar className="star filled" />
                        <FaStar className="star filled" />
                        <FaStar className="star filled" />
                        <FaStar className="star filled" />
                        <FaStar className="star" />
                      </div>
                      <span>({products.filter((p) => Math.floor(p.rating) === 4).length})</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes("3")}
                        onChange={() => handleRatingChange("3")}
                      />
                      <div className="stars">
                        <FaStar className="star filled" />
                        <FaStar className="star filled" />
                        <FaStar className="star filled" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                      </div>
                      <span>({products.filter((p) => Math.floor(p.rating) === 3).length})</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes("2")}
                        onChange={() => handleRatingChange("2")}
                      />
                      <div className="stars">
                        <FaStar className="star filled" />
                        <FaStar className="star filled" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                      </div>
                      <span>({products.filter((p) => Math.floor(p.rating) === 2).length})</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes("1")}
                        onChange={() => handleRatingChange("1")}
                      />
                      <div className="stars">
                        <FaStar className="star filled" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                      </div>
                      <span>({products.filter((p) => Math.floor(p.rating) === 1).length})</span>
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="shop-content">
          <div className="shop-toolbar">
            <div className="showing-results">
              Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
              {filteredProducts.length} results
            </div>
            <div className="shop-actions">
              <select className="sort-select" value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
                <option value="default">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price-low">Sort by price: low to high</option>
                <option value="price-high">Sort by price: high to low</option>
              </select>
              <div className="view-switcher">
                <button
                  className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                >
                  <BsGrid />
                </button>
                <button
                  className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                >
                  <BsListUl />
                </button>
              </div>
            </div>
          </div>

          <div className={`products-grids ${viewMode === "list" ? "list-view" : ""}`}>
  {currentProducts.length > 0 ? (
    currentProducts.map((product) => {
      // Calculate the total price using the calculateGoldPrice function
      const totalPrice = calculateGoldPrice({
        goldRate,
        weight: product.weight,
        makingChargePerGram,
      });

      const minPrice = totalPrice;
      const maxPrice = totalPrice + 10000;

      return (
        <div key={product.id} className="product-cards">
          <Link to="/shop" className="product-link">
            <div className="product-image">
              <img src={product.image || "/public/featured1.jpeg"} alt={product.name} />

              {product.isSale && (
                <div className="product-badge sale">
                  <span>{product.discount}%</span>
                </div>
              )}

              {product.isNew && (
                <div className="product-badge new">
                  <span>NEW</span>
                </div>
              )}

              <div className="product-actions">
                <button className="action-btn" title="Quick View" onClick={(e) => quickView(e, product)}>
                  <FaSearch />
                </button>
                <button className="action-btn" title="Add to Wishlist" onClick={(e) => addToWishlist(e, product)}>
                  <FaHeart />
                </button>
              </div>
            </div>

            <div className="product-info">
              <div className="product-category">{product.category}</div>

              <div className="product-rating">
                <div className="stars">{renderStars(product.rating)}</div>
              </div>

              <div className="product-price">
                {minPrice === maxPrice ? (
                  <>
                    {product.originalPrice && <span className="old-price">₹{product.originalPrice}</span>}
                    <span className="current-price">₹{minPrice}</span>
                  </>
                ) : (
                  <span className="price-range">
                    ₹{minPrice} – ₹{maxPrice}
                  </span>
                )}
              </div>

              <button className="add-to-cart" onClick={(e) => addToCart(e, product)}>
                <FaShoppingCart className="cart-icon" /> Add to Cart
              </button>
            </div>
          </Link>
        </div>
      );
    })
  ) : (
    <div className="no-products">
      <p>No products found matching your criteria. Please try different filters.</p>
    </div>
  )}
</div>


          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={currentPage === number ? "current" : ""}
                >
                  {number}
                </button>
              ))}
              {currentPage < totalPages && (
                <button className="next page-numbers" onClick={() => paginate(currentPage + 1)}>
                  →
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop
