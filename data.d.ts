type PostsData = {
  data: Post[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type Post = {
  id: number;
  attributes: {
    content: string;
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            small: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    categories: {
      data: [];
    };
  };
};

type SinglePost = {
  data: {
    id: number;
    attributes: {
      content: string;
      title: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      cover: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: null | string;
            caption: string | null;
            width: number;
            height: number;
            formats: {
              small: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: string | null;
                size: number;
                width: number;
                height: number;
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                };
              };
              thumbnail: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: string | null;
                size: number;
                width: number;
                height: number;
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                };
              };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string | null;
            provider: string;
            provider_metadata: {
              public_id: string;
              resource_type: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
      };
      categories: {
        data: [
          {
            id: number;
            attributes: {
              name: string;
              createdAt: string;
              updatedAt: string;
              publishedAt: string | null;
            };
          }
        ];
      };
    };
  };
  meta: {};
};
