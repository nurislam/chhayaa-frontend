import { useCategoryQuery } from '@/data/category/use-category.query';
import Link from 'next/link';

// const category_contents = {
//     title: 'Top Categories',
//     text: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore',
//     category_items: [
//         {
//             delay: '50',
//             color: 'color-primary-style',
//             icon: 'icon-9',
//             title: 'Business Management'
//         },
//         {
//             delay: '100',
//             color: 'color-secondary-style',
//             icon: 'icon-10 art-design',
//             title: 'Arts & Design'
//         },
//         {
//             delay: '150',
//             color: 'color-extra01-style',
//             icon: 'icon-11 personal-development',
//             title: 'Personal Development'
//         },
//         {
//             delay: '50',
//             color: 'color-tertiary-style',
//             icon: 'icon-12 health-fitness',
//             title: 'Health & Fitness'
//         },
//         {
//             delay: '100',
//             color: 'color-extra02-style',
//             icon: 'icon-13 data-science',
//             title: 'Data Science'
//         },
//         {
//             delay: '150',
//             color: 'color-extra03-style',
//             icon: 'icon-14',
//             title: 'Marketing'
//         },
//         {
//             delay: '50',
//             color: 'color-extra04-style',
//             icon: 'icon-15',
//             title: 'Business & Finance'
//         },
//         {
//             delay: '100',
//             color: 'color-extra05-style',
//             icon: 'icon-16 computer-science',
//             title: 'Computer Science'
//         },
//         {
//             delay: '150',
//             color: 'color-extra06-style',
//             icon: 'icon-17 video-photography',
//             title: 'Video & Photography'
//         }
//     ]
// }
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
console.log("Filtered category_contents:", category_items.length);
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
