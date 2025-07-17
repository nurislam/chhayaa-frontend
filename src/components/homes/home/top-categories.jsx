import { useCategoryQuery } from '@/data/category/use-category.query';
import Link from 'next/link';

const TopCategories = () => {
  const {
    data: categoryData = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useCategoryQuery({
    where: { deleted: 0, categoryType: "course" },
    order: ["createdAt DESC"],
  });

  if (isLoading || isFetching) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error loading categories.</div>;
  }

  console.log("Raw categoryData:", categoryData);

  const categoriesToplist = categoryData
    .filter((cat) => cat.status === "active" && !cat.deleted)
    .map((cat) => ({
      delay: "150",
      link: `/course?category=${cat.identifier}`,
      color: "color-extra06-style",
      icon: "icon-17 video-photography",
      title: cat.categoryName,
      text: cat.categoryDescription,
    }));

  console.log("Filtered categoriesToplist:", categoriesToplist);

  const category_contents = {
    title: "Top Categories",
    text: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore",
    category_items: categoriesToplist,
  };

  const { title, text, category_items } = category_contents;

  return (
    <div className="edu-categorie-area categorie-area-2 edu-section-gap">
      <div className="container">
        <div
          className="section-title section-center"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <h2 className="title">{title}</h2>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
          <p>{text}</p>
        </div>

        <div className="row g-5">
          {category_items.length === 0 ? (
            <p>No categories found.</p>
          ) : (
            category_items.map((item, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6"
                data-sal-delay={`${item.delay}`}
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <div className={`categorie-grid categorie-style-2 ${item.color}`}>
                  <div className="icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="content">
                    <Link href={item.link}>
                      <h5 className="title">{item.title}</h5>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
