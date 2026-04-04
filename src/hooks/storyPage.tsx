import { useCRUDStory } from "./useCRUDList";


const StoryPage = () => {
  const { list, add, remove, update } = useCRUDStory();

  return (
    <div>
      <button onClick={() => add({ title: "New story" })}>
        Thêm
      </button>

      {list.map((item: any) => (
        <div key={item.id}>
          <h3>{item.title}</h3>

          <button onClick={() => remove(item.id)}>Xóa</button>

          <button
            onClick={() =>
              update({
                id: item.id,
                data: { ...item, title: "Updated" },
              })
            }
          >
            Sửa
          </button>
        </div>
      ))}
    </div>
  );
};

export default StoryPage;