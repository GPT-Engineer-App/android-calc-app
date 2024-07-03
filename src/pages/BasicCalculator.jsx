import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BasicCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [area, setArea] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [remainingYears, setRemainingYears] = useState("");
  const [completion, setCompletion] = useState("");
  const [annualLandPriceIncrease, setAnnualLandPriceIncrease] = useState("");
  const [expectedCompletionPrice, setExpectedCompletionPrice] = useState("");
  const [expectedUnitPrice, setExpectedUnitPrice] = useState("");
  const [annualYield1br, setAnnualYield1br] = useState("");
  const [annualYield2br, setAnnualYield2br] = useState("");
  const [annualYield3br, setAnnualYield3br] = useState("");
  const [expectedAnnualProfit, setExpectedAnnualProfit] = useState("");
  const [netRentalPrice, setNetRentalPrice] = useState("");
  const [minUnionFee, setMinUnionFee] = useState("");
  const [maxUnionFee, setMaxUnionFee] = useState("");

  return (
    <div className="space-y-4">
      <h1 className="text-3xl text-center">想定賃貸額計算機</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>入力欄</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="purchasePrice">購入価格/竣工時価格</Label>
              <Input
                id="purchasePrice"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="area">面積</Label>
              <Input
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="unitPrice">平米単価</Label>
              <Input
                id="unitPrice"
                value={unitPrice}
                onChange={(e) => setUnitPrice(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="remainingYears">竣工残り年数</Label>
              <Input
                id="remainingYears"
                value={remainingYears}
                onChange={(e) => setRemainingYears(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="completion">竣工</Label>
              <Input
                id="completion"
                value={completion}
                onChange={(e) => setCompletion(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="annualLandPriceIncrease">周辺地価上昇率/年</Label>
              <Input
                id="annualLandPriceIncrease"
                value={annualLandPriceIncrease}
                onChange={(e) => setAnnualLandPriceIncrease(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="expectedCompletionPrice">想定竣工時価格</Label>
              <Input
                id="expectedCompletionPrice"
                value={expectedCompletionPrice}
                onChange={(e) => setExpectedCompletionPrice(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="expectedUnitPrice">想定平米単価</Label>
              <Input
                id="expectedUnitPrice"
                value={expectedUnitPrice}
                onChange={(e) => setExpectedUnitPrice(e.target.value)}
              />
            </div>
            <div>
              <Label>周辺平均年間利回り</Label>
              <div className="space-y-2">
                <div>
                  <Label htmlFor="annualYield1br">1br</Label>
                  <Input
                    id="annualYield1br"
                    value={annualYield1br}
                    onChange={(e) => setAnnualYield1br(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="annualYield2br">2br</Label>
                  <Input
                    id="annualYield2br"
                    value={annualYield2br}
                    onChange={(e) => setAnnualYield2br(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="annualYield3br">3br</Label>
                  <Input
                    id="annualYield3br"
                    value={annualYield3br}
                    onChange={(e) => setAnnualYield3br(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="expectedAnnualProfit">想定年間総利益</Label>
              <Input
                id="expectedAnnualProfit"
                value={expectedAnnualProfit}
                onChange={(e) => setExpectedAnnualProfit(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="netRentalPrice">純賃貸価格</Label>
              <Input
                id="netRentalPrice"
                value={netRentalPrice}
                onChange={(e) => setNetRentalPrice(e.target.value)}
              />
            </div>
            <div>
              <Label>組合費 (毎月)</Label>
              <div className="space-y-2">
                <div>
                  <Label htmlFor="minUnionFee">最低</Label>
                  <Input
                    id="minUnionFee"
                    value={minUnionFee}
                    onChange={(e) => setMinUnionFee(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="maxUnionFee">最大</Label>
                  <Input
                    id="maxUnionFee"
                    value={maxUnionFee}
                    onChange={(e) => setMaxUnionFee(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>表示欄</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>平米単価</Label>
              <p>{unitPrice}</p>
            </div>
            <div>
              <Label>竣工</Label>
              <p>{completion}</p>
            </div>
            <div>
              <Label>周辺地価上昇率/年</Label>
              <p>{annualLandPriceIncrease}</p>
            </div>
            <div>
              <Label>想定竣工時価格</Label>
              <p>{expectedCompletionPrice}</p>
            </div>
            <div>
              <Label>想定平米単価</Label>
              <p>{expectedUnitPrice}</p>
            </div>
            <div>
              <Label>想定年間総利益</Label>
              <p>{expectedAnnualProfit}</p>
            </div>
            <div>
              <Label>純賃貸価格</Label>
              <p>{netRentalPrice}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="text-center">
        <Button>計算する</Button>
      </div>
    </div>
  );
};

export default BasicCalculator;