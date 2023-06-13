
import { Card, Rate } from 'antd';
import Typography from 'antd/es/typography/Typography';

const Review = () => {
  return (
    <div className='flex flex-col ml-auto '>
      <Typography.Title level={2} type="danger"> Customer-Review</Typography.Title>
    <Card className="w-[70%]  h-auto mt-2">
      <div className="flex items-center mb-4 ">
       
        <div>
          <h3 className="text-lg font-bold">John Doe</h3>
          <p className="text-gray-500">Software Engineer</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
        sollicitudin nunc. Phasellus finibus ligula ac ante consequat
        porttitor.
      </p>
      <div className="flex items-center">
        <span className="mr-2">Rating:</span>
        <Rate className='flex ml-8' disabled defaultValue={4} />
      </div>
    </Card>
     <Card className="w-[70%]   h-auto mt-2">
     <div className="flex items-center mb-4 ">
      
       <div>
         <h3 className="text-lg font-bold">John Doe</h3>
         <p className="text-gray-500">Software Engineer</p>
       </div>
     </div>
     <p className="text-gray-700 mb-4">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
       sollicitudin nunc. Phasellus finibus ligula ac ante consequat
       porttitor.
     </p>
     <div className="flex items-center">
       <span className="mr-2">Rating:</span>
       <Rate className='flex ml-4' disabled defaultValue={4} />
     </div>
   </Card>
   </div>
  );
};

export default Review;
