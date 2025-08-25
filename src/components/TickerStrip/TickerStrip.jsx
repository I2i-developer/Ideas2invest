'use client';
import { useEffect, useState } from "react";
import styles from "./TickerStrip.module.css";

const TickerStrip = () => {
    const [data, setData] = useState([]);

    const apiKey = "d28570pr01qr2iaunmtgd28570pr01qr2iaunmu0";

    const symbols = ["AAPL", "GOOGL"];
    const mutualFunds = [
        { schemeCode: "119551", name: "ICICI Prudential Bluechip Fund", logo: "/assets/images/mutual-logos/icici.png" },
        { schemeCode: "118834", name: "SBI Small Cap Fund", logo: "/assets/images/mutual-logos/sbi.png" },
        { schemeCode: "120503", name: "HDFC Mid Cap Opportunities Fund", logo: "/assets/images/mutual-logos/hdfc.png" },
        { schemeCode: "119809", name: "Axis Long Term Equity Fund", logo: "/assets/images/mutual-logos/axis.png" },
        { schemeCode: "118825", name: "UTI Flexi Cap Fund", logo: "/assets/images/mutual-logos/uti.png" },
        { schemeCode: "120588", name: "Nippon India Small Cap Fund", logo: "/assets/images/mutual-logos/nippon.png" },
        { schemeCode: "119497", name: "HDFC Top 100 Fund", logo: "/assets/images/mutual-logos/hdfc.png" },
        { schemeCode: "119450", name: "SBI Magnum Taxgain Scheme", logo: "/assets/images/mutual-logos/sbi.png" },
        { schemeCode: "120590", name: "ICICI Prudential Value Discovery Fund", logo: "/assets/images/mutual-logos/icici.png" },
        { schemeCode: "118550", name: "Franklin India Prima Fund", logo: "/assets/images/mutual-logos/franklin.png" },
        { schemeCode: "119726", name: "Canara Robeco Emerging Equities", logo: "/assets/images/mutual-logos/canara.png" },
        { schemeCode: "119653", name: "Kotak Emerging Equity Fund", logo: "/assets/images/mutual-logos/kotak.png" },
        { schemeCode: "120333", name: "ICICI Prudential Equity & Debt Fund", logo: "/assets/images/mutual-logos/icici.png" },
        { schemeCode: "119785", name: "DSP Midcap Fund", logo: "/assets/images/mutual-logos/dsp.png" },
        { schemeCode: "120555", name: "PGIM India Midcap Opportunities", logo: "/assets/images/mutual-logos/pgim.png" },
        { schemeCode: "119174", name: "Aditya Birla Sun Life Tax Relief 96", logo: "/assets/images/mutual-logos/birla.png" },
        { schemeCode: "120509", name: "HDFC Small Cap Fund", logo: "/assets/images/mutual-logos/hdfc.png" },
        { schemeCode: "120494", name: "SBI Equity Hybrid Fund", logo: "/assets/images/mutual-logos/sbi.png" },
        { schemeCode: "119686", name: "Tata Digital India Fund", logo: "/assets/images/mutual-logos/tata.png" },
        { schemeCode: "118820", name: "ICICI Prudential Balanced Advantage Fund", logo: "/assets/images/mutual-logos/icici.png" },
        { schemeCode: "119692", name: "Quant Small Cap Fund", logo: "/assets/images/mutual-logos/quant.png" },
        { schemeCode: "118599", name: "IDFC Sterling Value Fund", logo: "/assets/images/mutual-logos/idfc.png" },
        { schemeCode: "119703", name: "Motilal Oswal Midcap Fund", logo: "/assets/images/mutual-logos/motilal.png" },
        { schemeCode: "120597", name: "Nippon India Growth Fund", logo: "/assets/images/mutual-logos/nippon.png" },
        { schemeCode: "120503", name: "HDFC Mid Cap Opportunities Fund", logo: "/assets/images/mutual-logos/hdfc.png" },
        { schemeCode: "118834", name: "SBI Small Cap Fund", logo: "/assets/images/mutual-logos/sbi.png" },
        { schemeCode: "100956", name: "ICICI Prudential Bluechip Fund", logo: "/assets/images/mutual-logos/icici.png" },
        { schemeCode: "119551", name: "Nippon India Small Cap Fund", logo: "/assets/images/mutual-logos/nippon.png" },
        { schemeCode: "135819", name: "Axis Small Cap Fund", logo: "/assets/images/mutual-logos/axis.png" },
        { schemeCode: "140825", name: "Parag Parikh Flexi Cap Fund", logo: "/assets/images/mutual-logos/ppfas.png" },
        { schemeCode: "135777", name: "UTI Flexi Cap Fund", logo: "/assets/images/mutual-logos/uti.png" },
        { schemeCode: "135769", name: "Kotak Emerging Equity Fund", logo: "/assets/images/mutual-logos/kotak.png" },
        { schemeCode: "135768", name: "Canara Robeco Emerging Equities Fund", logo: "/assets/images/mutual-logos/canara.png" },
        { schemeCode: "100132", name: "Mirae Asset Large Cap Fund", logo: "/assets/images/mutual-logos/mirae.png" },
        { schemeCode: "135774", name: "SBI Equity Hybrid Fund", logo: "/assets/images/mutual-logos/sbi.png" },
        { schemeCode: "135769", name: "Tata Digital India Fund", logo: "/assets/images/mutual-logos/tata.png" },
        { schemeCode: "135765", name: "ICICI Prudential Technology Fund", logo: "/assets/images/mutual-logos/icici.png" },
        { schemeCode: "145825", name: "Quant Small Cap Fund", logo: "/assets/images/mutual-logos/quant.png" },
        { schemeCode: "125354", name: "DSP Midcap Fund", logo: "/assets/images/mutual-logos/dsp.png" },
    ];


    const fetchStocks = async () => {
        return await Promise.all(
            symbols.map(async (symbol) => {
                const quoteRes = await fetch(
                    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
                );
                const profileRes = await fetch(
                    `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apiKey}`
                );

                const quote = await quoteRes.json();
                const profile = await profileRes.json();

                return {
                    symbol,
                    name: profile.name || symbol,
                    logo: profile.logo || null,
                    price: quote?.c ?? null,
                    change: quote?.d ?? null,
                    percent: quote?.dp ?? null,
                    type: "stock",
                };
            })
        );
    };

    const fetchMutualFunds = async () => {
        return await Promise.all(
            mutualFunds.map(async (mf) => {
                try {
                    const res = await fetch(`https://api.mfapi.in/mf/${mf.schemeCode}`);
                    const json = await res.json();
                    const latest = json.data[0];

                    return {
                        symbol: mf.name,
                        name: mf.name,
                        logo: mf.logo || null,
                        price: parseFloat(latest.nav),
                        change: null,
                        percent: null,
                        type: "mutual",
                    };
                } catch (err) {
                    console.error("MFAPI error:", mf.schemeCode, err);
                    return {
                        symbol: mf.name,
                        name: mf.name,
                        logo: mf.logo || null,
                        price: null,
                        change: null,
                        percent: null,
                        type: "mutual",
                    };
                }
            })
        );
    };

    const fetchAllData = async () => {
        try {
            const [stocks, mutuals] = await Promise.all([
                fetchStocks(),
                fetchMutualFunds(),
            ]);
            console.log("Stocks:", stocks);
            console.log("Mutuals:", mutuals);

            setData([...stocks, ...mutuals]);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };


    useEffect(() => {
        fetchAllData();
        const interval = setInterval(fetchAllData, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.tickerWrapper}>
            <div className={styles.ticker}>
                {data.length === 0 ? (
                    <div className={styles.loadingStrip}>
                        <span className={styles.loading}>Fetching latest prices...</span>
                    </div>
                ) : (
                    [...data, ...data].map((item, index) => (
                        <div key={index} className={styles.tickerItem}>
                            <div className={styles.logoBlock}>
                                {item.logo && (
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className={styles.logo}
                                    />
                                )}
                                <span className={styles.symbol}>{item.name}</span>
                            </div>

                            {item.price != null ? (
                                <span
                                    className={
                                        item.type === "stock"
                                            ? item.change >= 0
                                                ? styles.positive
                                                : styles.negative
                                            : styles.nav
                                    }
                                >
                                    ₹{item.price.toFixed(2)}
                                    {item.type === "stock" && item.change != null && item.percent != null && (
                                        <> ({item.change.toFixed(2)} | {item.percent.toFixed(2)}%)</>
                                    )}
                                </span>
                            ) : (
                                <span className={styles.loading}>Loading...</span>
                            )}
                        </div>
                    ))

                )}
            </div>
        </div>
    );
};

export default TickerStrip;
