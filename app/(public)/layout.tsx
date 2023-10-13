const PublicLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <div className="h-full dark:bg-[#1F1F1F] overflow-y-auto">
        {children}
      </div>
     );
  }
   
  export default PublicLayout;