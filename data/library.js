import EditIcon from "../components/assets/icons/Edit2";
import Checkbox from "@mui/material/Checkbox";
import UncheckedIcon from "../components/assets/icons/unchecked";
import CheckedIcon from "../components/assets/icons/checked";

export const TouteslessData = [
  {
    Intitule: {
      num: "EDN 2023",
      title: "DP 1",
    },
    Matieres: [
      {
        img: "/images/cardiologie.png",
        title: "Cardiologie",
      },
    ],
    Items: [
      {
        index: 145,
        title: "Surveillance des maladies infectieuses trans...",
      },
    ],
    Lastscore: "20",
    Lastassessed: "7 days ago",
  },
  {
    Intitule: {
      num: "EDN 2023",
      title: "QI 29",
    },
    Matieres: [
      {
        img: "/images/rhumatologie.png",
        title: "Rhumatologie",
      },
      {
        img: "/images/neurologie.png",
        title: "Neurologie",
      },
      {
        img: "",
        title: "+ 3",
      },
    ],
    Items: [
      {
        index: 133,
        title: "Autonomie et dépendance chez le sujet âgé",
      },
    ],
    Lastscore: "19",
    Lastassessed: "7 days ago",
  },
  {
    Intitule: {
      num: "EDN 2024",
      title: "DP 1",
    },
    Matieres: [
      {
        img: "/images/neurologie.png",
        title: "Neurologie",
      },
      {
        img: "/images/cardiologie.png",
        title: "Cardiologie",
      },
    ],
    Items: [
      {
        index: 96,
        title: "Myasthénie",
      },
    ],
    Lastscore: "14.5",
    Lastassessed: "7 days ago",
  },
  {
    Intitule: {
      num: "ECNi 2021",
      title: "QI 80",
    },
    Matieres: [
      {
        img: "/images/Hepato.png",
        title: "Hépato-Gastro-Entérologiee",
      },
    ],
    Items: [
      {
        index: 330,
        title: "Hémorragies méningées",
      },
      {
        index: 186,
        title: "Oreillons",
      },
      {
        index: "",
        title: "+ 1",
      },
    ],
    Lastscore: "10",
    Lastassessed: "7 days ago",
  },
  {
    Intitule: {
      num: "EDN 2023",
      title: "KFP 2",
    },
    Matieres: [
      {
        img: "/images/dermatologie.png",
        title: "Dermatologie",
      },
    ],
    Items: [
      {
        index: 268,
        title: "Hypercalcémie",
      },
    ],
    Lastscore: "0",
    Lastassessed: "7 days ago",
  },
  {
    Intitule: {
      num: "ECNi juin 2023",
      title: "QI 03",
    },
    Matieres: [
      {
        img: "/images/pneumologie.png",
        title: "Pneumologie",
      },
    ],
    Items: [
      {
        index: 259,
        title: "Protéinurie et syndrome néphrotique chez...",
      },
    ],
    Lastscore: "20",
    Lastassessed: "14 days ago",
  },
  {
    Intitule: {
      num: "EDNp 2023",
      title: "DP 1",
    },
    Matieres: [
      {
        img: "/images/néphrologie.png",
        title: "Néphrologie",
      },
    ],
    Items: [
      {
        index: 87,
        title: "Epistaxis",
      },
      {
        index: 152,
        title: "Endocardites infectieuses",
      },
      {
        index: "",
        title: "+ 3",
      },
    ],
    Lastscore: "20",
    Lastassessed: "1 month ago",
  },
  {
    Intitule: {
      num: "EDN 2023",
      title: "DP 9",
    },
    Matieres: [
      {
        img: "/images/endocrinologie-diabétologie-nutrition.png",
        title: "Endocrinologie-Diabétologie-Nutrition",
      },
    ],
    Items: [
      {
        index: 101,
        title: "Paralysie faciale",
      },
      {
        index: 102,
        title: "Diplopie",
      },
    ],
    Lastscore: "10",
    Lastassessed: "3 months ago",
  },
  {
    Intitule: {
      num: "EDN 2023",
      title: "QI 7",
    },
    Matieres: [
      {
        img: "/images/chirurgie-orthopédique.png",
        title: "Chirurgie Orthopédique",
      },
    ],
    Items: [
      {
        index: 121,
        title: "Le handicap psychique",
      },
    ],
    Lastscore: "4",
    Lastassessed: "5 months ago",
  },
];

export const Touteslesscolumns = [
  {
    name: (
      <div
        style={{
          paddingLeft: "10px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#DDDCFF",
          width: "20px",
          height: "20px",
          borderRadius: "7px",
          marginLeft: "35%",
        }}
      >
        <svg
          width="8"
          height="3"
          viewBox="0 0 8 3"
          fill="none"
          style={{ marginTop: "9px", marginLeft: "-4px" }}
        >
          <rect y="0.0195312" width="8" height="2" rx="1" fill="#6F58F6" />
        </svg>
      </div>
    ),
    selector: (row) => (
      <div className=" justify-center text-center">
        <Checkbox
          checkedIcon={<CheckedIcon />}
          icon={<UncheckedIcon />}
        />
      </div>
    ),
    sortable: false,
  },
  {
    name: "Intitulé",
    selector: (row) => (
      <div className="flex items-center gap-0.5 h-7 px-1.5 w-fit rounded-lg bg-[#F3F3F4] border border-[#E2E2E4]">
        <span className="item-index flex justify-center items-center h-[15px] p-1 text-white text-[6px] font-manrope font-semibold border border-[#ECECED] rounded bg-[#2F3037]">
          {row.Intitule.num}
        </span>
        <span className="font-manrope font-bold text-[10px]">
          {row.Intitule.title}
        </span>
      </div>
    ),
    sortable: true,
    sortFunction: (rowA, rowB) => {
      return 0;
    },
  },
  {
    name: "Matières",
    selector: (row) => (
      <div className="flex">
        {row.Matieres.map((data, index) => {
          if (index == 2)
            return (
              <div
                key={index}
                className="flex items-center gap-0.5 h-7 px-1.5 w-fit rounded-lg bg-[#F3F3F4] border border-[#E2E2E4]"
              >
                <span className="font-manrope font-bold text-[10px]">
                  {data.title}
                </span>
              </div>
            );
          return (
            <div
              key={index}
              className="flex items-center gap-0.5 h-7 px-1.5 w-fit rounded-full bg-[#F3F3F4] border border-[#E2E2E4]"
            >
              <span className="item-index flex justify-center items-center h-[15px] w-[18px] text-[6px] font-manrope font-semibold border border-[#ECECED] rounded">
                <img src={data.img} alt={data.img} />
              </span>
              <span className="font-manrope font-bold text-[10px]">
                {data.title}
              </span>
            </div>
          );
        })}
      </div>
    ),
    sortable: true,
    sortFunction: (rowA, rowB) => {
      return 0;
    },
  },
  {
    name: "Items",
    selector: (row) => (
      <div className="flex">
        {row.Items.map((data, index) => {
          if (index == 2)
            return (
              <div
                key={index}
                className="flex items-center gap-0.5 h-7 px-1.5 w-fit rounded-lg bg-[#F3F3F4] border border-[#E2E2E4]"
              >
                <span className="font-manrope font-bold text-[10px]">
                  {data.title}
                </span>
              </div>
            );
          return (
            <div
              key={index}
              className="flex items-center gap-0.5 h-7 px-1.5 w-fit rounded-full bg-[#F3F3F4] border border-[#E2E2E4]"
            >
              <span className="item-index flex justify-center items-center h-[15px] w-[18px] text-[6px] font-manrope font-semibold border border-[#ECECED] rounded bg-white">
                {data.index}
              </span>
              <span className="font-manrope font-bold text-[10px]">
                {data.title}
              </span>
            </div>
          );
        })}
      </div>
    ),
    sortable: true,
    sortFunction: (rowA, rowB) => {
      return 0;
    },
  },
  {
    name: "Last score",
    selector: (row) => (
      <div className="text-[10px] font-manrope font-medium text-[#667085] ms-5">
        {row.Lastscore}/20
      </div>
    ),
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = rowA.Lastscore;
      const b = rowB.Lastscore;

      if (a > b) {
        return 1;
      }

      if (b > a) {
        return -1;
      }

      return 0;
    },
  },
  {
    name: "Last assessed",
    selector: (row) => (
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-manrope font-medium text-[#667085]">
          {row.Lastassessed}
        </div>
        <button className="ml-8 group">
          <EditIcon />
        </button>
      </div>
    ),
    sortable: true,
    sortFunction: (rowA, rowB) => {
      return 0;
    },
  },
];

export const TouteslessTableStyle = {
  header: {
    style: {
      minHeight: "56px",
    },
  },
  headRow: {
    style: {
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      borderBottomColor: "#EAECF0",
      backgroundColor: "#FCFCFD",
    },
  },
  headCells: {
    style: {
      color: "#667085",
      fontSize: "11px",
      fontWeight: "medium",
      fontFamily: "Manrope",
      transition: "all",
      "&:hover": {
        color: "#151A1E ",
      },
      "&:nth-child(1)": {
        flex: 1,
      },
      "&:nth-child(2)": {
        flex: 2,
      },
      "&:nth-child(3)": {
        flex: 5,
      },
      "&:nth-child(4)": {
        flex: 5,
      },
      "&:nth-child(5)": {
        flex: 2,
      },
      "&:nth-child(6)": {
        flex: 2,
      },
    },
  },
  rows: {
    style: {
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      borderBottomColor: "#EAECF0",
    },
  },
  cells: {
    style: {
      "&:nth-child(1)": {
        flex: 1,
      },
      "&:nth-child(2)": {
        flex: 2,
      },
      "&:nth-child(3)": {
        flex: 5,
      },
      "&:nth-child(4)": {
        flex: 5,
      },
      "&:nth-child(5)": {
        flex: 2,
      },
      "&:nth-child(6)": {
        flex: 2,
      },
    },
  },
};
